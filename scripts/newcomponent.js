import path from 'node:path'
import url from 'node:url'
import fs from 'node:fs/promises'

// Use:
// npm run g:component Table
// npm run g:component TableHead in Table

const selfPath = url.fileURLToPath(new URL('.', import.meta.url))
const componentsPath = path.join(selfPath, '..', 'packages', 'react', 'src', 'components')
const docsPagesPath = path.join(selfPath, '..', 'packages', 'docs', 'src', 'Pages')
const name = process.argv[2]
const restArgs = process.argv.slice(3)

if (!name) {
  throw new Error('Missing name')
}

if (!/^[A-Z]/.test(name)) {
  throw new Error('Component name must be Titlecase')
}

const camelcase = (str) => str[0].toLowerCase() + str.slice(1)
const lower = (str) => str.toLowerCase()

const run = async (inName) => {
  const componentFolder = path.join(componentsPath, inName || name)
  const pagesFolder = path.join(docsPagesPath, lower(name))
  console.log(`Creating new component '${name}' in ${componentFolder}...`)

  if (!inName) {
    await fs.mkdir(componentFolder)
    await fs.writeFile(path.join(componentFolder, 'index.ts'), indexTemplate)
    await fs.writeFile(path.join(componentFolder, `${name}.tsx`), componentTemplate(name))
    await fs.writeFile(path.join(componentFolder, `${name}.styles.ts`), stylesTemplate(name))
    await fs.writeFile(path.join(componentFolder, 'types.ts'), typesTemplate(name))
    console.log('Wrote 4 files.')

    await fs.appendFile(path.join(componentsPath, 'index.ts'), `export * from './${name}'\n`)
    console.log(`Added export to ${path.join(componentsPath, 'index.ts')}`)
  } else {
    if (!(await fs.stat(componentFolder)).isDirectory()) {
      throw new Error(`Could not find a directory at ${componentFolder}`)
    }
    await fs.writeFile(path.join(componentFolder, `${name}.tsx`), componentTemplate(name, inName))
    await fs.appendFile(
      path.join(componentFolder, 'index.ts'),
      `export { ${name} } from './${name}'\n`,
    )
    await fs.appendFile(path.join(componentFolder, 'types.ts'), `\n${typesTemplatePart(name)}`)
    await fs.appendFile(
      path.join(componentFolder, `${inName}.styles.ts`),
      `\n${stylesTemplatePart(name)}`,
    )
    console.log('Wrote 1 file and updated 3 files.')
  }

  if (!inName) {
    await fs.mkdir(pagesFolder)
    await fs.writeFile(path.join(pagesFolder, 'index.mdx'), docsTemplate)
    await fs.writeFile(path.join(pagesFolder, 'colors.mdx'), `<Inline><${name} /></Inline>`)
    console.log(`Added docs pages to ${pagesFolder}`)
  }
}
/// ------------------------

const indexTemplate = `export { ${name} } from './${name}'
`

const componentTemplate = (name, inName = name) => `import { forwardRef } from 'react'
import { ${camelcase(name)}Styles } from 'src/components/${inName}/${inName}.styles'
import { ${name}Component, ${name}Props } from 'src/components/${inName}/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = '${name}'

export const ${name} = forwardRef<HTMLDivElement, ${name}Props>(({
  className: _className,
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)

  return (
    <div
      ref={ref}
      {...props}
      className={className}
      css={${camelcase(name)}Styles(theme)}
    >

    </div>
  )
}) as ${name}Component

if (process.env.NODE_ENV !== 'production') {
  ${name}.displayName = ELEMENT_NAME
}
`

const stylesTemplatePart = (name) => `export const ${camelcase(
  name,
)}Styles = (theme: ColorTheme) => css({
})
`

const stylesTemplate = (name) => `import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

${stylesTemplatePart(name)}
`

const typesTemplatePart = (
  name,
) => `export interface ${name}Props extends PropsWithChildrenAndClassName {
  prop?: string;
}
export type ${name}Component<P = ${name}Props> = ForwardRefExoticComponent<P>
`

const typesTemplate = (name) => `import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

${typesTemplatePart(name)}
`

const docsTemplate = `import colorCode from './colors.mdx?raw'

# ${name}

Description goes here.

-----
## Colors
<ComponentPreview code={colorCode} />
`

if (restArgs[0] && restArgs[0] !== 'in') {
  throw new Error('invalid params')
}

if (restArgs[0] === 'in') {
  const inName = restArgs[1]
  if (!inName) {
    throw new Error('Missing component folder to add to')
  }
  await run(inName)
} else {
  await run()
}

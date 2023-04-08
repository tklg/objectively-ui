import path from 'node:path'
import url from 'node:url'
import fs from 'node:fs/promises'

const selfPath = url.fileURLToPath(new URL('.', import.meta.url))
const componentsPath = path.join(selfPath, '..', 'packages', 'react', 'src', 'components')
const docsPagesPath = path.join(selfPath, '..', 'packages', 'docs', 'src', 'Pages')
const name = process.argv[2]
if (!name) {
  throw new Error('Missing name')
}

if (!/^[A-Z]/.test(name)) {
  throw new Error('Component name must be Titlecase')
}

const lower = (str) => str.toLowerCase()

const run = async () => {
  const componentFolder = path.join(componentsPath, name)
  const pagesFolder = path.join(docsPagesPath, lower(name))
  console.log(`Creating new component '${name}' in ${componentFolder}...`)

  await fs.mkdir(componentFolder)
  await fs.writeFile(path.join(componentFolder, 'index.ts'), indexTemplate)
  await fs.writeFile(path.join(componentFolder, `${name}.tsx`), componentTemplate)
  await fs.writeFile(path.join(componentFolder, `${name}.styles.ts`), stylesTemplate)
  await fs.writeFile(path.join(componentFolder, 'types.ts'), typesTemplate)
  console.log('Wrote 4 files.')

  await fs.appendFile(path.join(componentsPath, 'index.ts'), `export * from './${name}'`)
  console.log(`Added export to ${path.join(componentsPath, 'index.ts')}`)

  await fs.mkdir(pagesFolder)
  await fs.writeFile(path.join(pagesFolder, 'index.mdx'), docsTemplate)
  await fs.writeFile(path.join(pagesFolder, 'colors.mdx'), `<Inline><${name} /></Inline>`)
  console.log(`Added docs pages to ${pagesFolder}`)
}
/// ------------------------

const indexTemplate = `export { ${name} } from './${name}'
`

const componentTemplate = `import { forwardRef } from 'react'
import { ${lower(name)}Styles } from 'src/components/${name}/${name}.styles'
import { ${name}Component, ${name}Props } from 'src/components/${name}/types'
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
      css={${lower(name)}Styles(theme)}
    >

    </div>
  )
}) as ${name}Component

if (process.env.NODE_ENV !== 'production') {
  ${name}.displayName = ELEMENT_NAME
}
`

const stylesTemplate = `import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const ${lower(name)}Styles = (theme: ColorTheme) => css({

})
`

const typesTemplate = `import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface ${name}Props extends PropsWithChildrenAndClassName {
  foo?: string;
}
export type ${name}Component<P = ${name}Props> = ForwardRefExoticComponent<P>
`

const docsTemplate = `import colorCode from './colors.mdx?raw'

# ${name}

Description goes here.

-----
## Colors
<ComponentPreview code={colorCode} />
`

await run()

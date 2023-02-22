import { readdirSync } from 'fs'
import path from 'path'

describe('docs mdx page file structure', () => {
  const directories = readdirSync(__dirname, { withFileTypes: true }).filter(dir => dir.isDirectory())

  it('has lowercase directories', () => {
    for (const directory of directories) {
      expect(directory.name, `${directory.name} must be all lowercase, 1 word`).to.match(/^[a-z]+$/)
    }
  })

  it('each directory contains an index.mdx', () => {
    for (const directory of directories) {
      const files = readdirSync(path.join(__dirname, directory.name))
      expect(files, `${path.basename(__dirname)}/${directory.name} is missing index.mdx`).to.include('index.mdx')
    }
  })
})

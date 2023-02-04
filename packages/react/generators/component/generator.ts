import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit'
import * as path from 'path'
import { ComponentGeneratorSchema } from './schema'

interface NormalizedSchema extends ComponentGeneratorSchema {
  projectName: string;
  projectRoot: string;
}

function normalizeOptions (tree: Tree, options: ComponentGeneratorSchema): NormalizedSchema {
  const name = names(options.name).fileName
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/components`

  return {
    ...options,
    projectName: name,
    projectRoot,
  }
}

function addFiles (tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  }
  generateFiles(tree, path.join(__dirname, 'files'), options.projectRoot, templateOptions)
}

export default async function (tree: Tree, options: ComponentGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options)
  addProjectConfiguration(
    tree,
    normalizedOptions.projectName,
    {
      root: normalizedOptions.projectRoot,
      projectType: 'library',
      sourceRoot: `${normalizedOptions.projectRoot}/src`,
      targets: {
        build: {
          executor: '@objectively-ui/react:build',
        },
      },
    },
  )
  addFiles(tree, normalizedOptions)
  await formatFiles(tree)
}

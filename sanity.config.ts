import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {singletonTypes} from './singletonTypes'
import {structure} from './structure'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'MrChasp Core',
  projectId: '6wzh28a3',
  dataset: 'production',
  plugins: [structureTool({structure}), visionTool()],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (actions, {schemaType}) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({action}) => action && singletonActions.has(action))
        : actions,
  },
})

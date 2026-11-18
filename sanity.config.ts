import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'
import {schemaTypes} from './schemaTypes'
import {profile} from './schemaTypes/profile'
import {structure} from './structure'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'MrChasp Core',
  projectId: '6wzh28a3',
  dataset: 'production',
  plugins: [structureTool({structure}), visionTool(), cloudinarySchemaPlugin()],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => schemaType !== profile.name),
  },
  document: {
    actions: (actions, {schemaType}) =>
      schemaType === profile.name
        ? actions.filter(({action}) => action && singletonActions.has(action))
        : actions,
  },
})

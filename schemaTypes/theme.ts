import {defineField, defineType} from 'sanity'

export const theme = defineType({
  name: 'theme',
  type: 'document',
  fields: [
    defineField({name: 'light', type: 'palette'}),
    defineField({name: 'dark', type: 'palette'}),
  ],
  preview: {prepare: () => ({title: 'Theme'})},
})

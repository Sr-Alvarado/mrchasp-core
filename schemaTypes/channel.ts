import {defineField, defineType} from 'sanity'

export const channel = defineType({
  name: 'channel',
  type: 'document',
  fields: [
    defineField({name: 'platform', type: 'string'}),
    defineField({name: 'handle', type: 'string'}),
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['https', 'mailto']}),
    }),
    defineField({name: 'priority', type: 'number'}),
    defineField({name: 'showInHero', type: 'boolean'}),
  ],
  preview: {select: {title: 'platform', subtitle: 'handle'}},
})

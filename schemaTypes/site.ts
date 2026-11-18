import {defineField, defineType} from 'sanity'

const hexColor = /^#[0-9a-f]{6}$/i

export const site = defineType({
  name: 'site',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      type: 'string',
      options: {list: ['root', 'lab', 'talks', 'blog', 'brain', 'cv', 'links']},
    }),
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'url', type: 'url'}),
    defineField({name: 'colorLight', type: 'string', validation: (rule) => rule.regex(hexColor)}),
    defineField({name: 'colorDark', type: 'string', validation: (rule) => rule.regex(hexColor)}),
    defineField({name: 'description', type: 'localeString'}),
    defineField({name: 'order', type: 'number'}),
  ],
})

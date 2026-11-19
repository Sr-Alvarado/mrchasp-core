import {defineField, defineType} from 'sanity'
import {projectStatuses} from './projectStatuses'

const hexColor = /^#[0-9a-f]{6}$/i

const uiLabels = [
  'home',
  'now',
  'nowTitle',
  'contact',
  'viewCv',
  'contactMe',
  'sections',
  'channels',
  'language',
  'theme',
]

const localeStringFields = (names: string[]) =>
  names.map((name) =>
    defineField({name, type: 'localeString', validation: (rule) => rule.required()}),
  )

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
    defineField({
      name: 'seoTitle',
      type: 'localeString',
      hidden: ({document}) => document?.key !== 'root',
    }),
    defineField({
      name: 'ui',
      type: 'object',
      hidden: ({document}) => document?.key !== 'root',
      fields: [
        ...localeStringFields(uiLabels),
        defineField({name: 'status', type: 'object', fields: localeStringFields(projectStatuses)}),
      ],
    }),
  ],
})

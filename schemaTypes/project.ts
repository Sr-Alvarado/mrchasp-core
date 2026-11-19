import {defineArrayMember, defineField, defineType} from 'sanity'
import {projectStatuses} from './projectStatuses'

export const project = defineType({
  name: 'project',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'name'}}),
    defineField({name: 'summary', type: 'localeString'}),
    defineField({name: 'description', type: 'localeText'}),
    defineField({
      name: 'status',
      type: 'string',
      options: {list: projectStatuses},
    }),
    defineField({name: 'stack', type: 'array', of: [defineArrayMember({type: 'string'})]}),
    defineField({
      name: 'images',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'localeString'}),
            defineField({name: 'url', type: 'url'}),
          ],
        }),
      ],
    }),
    defineField({name: 'featured', type: 'boolean'}),
    defineField({name: 'order', type: 'number'}),
  ],
})

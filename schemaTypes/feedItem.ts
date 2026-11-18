import {defineField, defineType} from 'sanity'

export const feedItem = defineType({
  name: 'feedItem',
  type: 'document',
  fields: [
    defineField({
      name: 'source',
      type: 'string',
      options: {list: ['instagram', 'bluesky', 'blog', 'brain', 'lab', 'talks']},
    }),
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'text', type: 'text'}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'url', type: 'url'}),
    defineField({name: 'publishedAt', type: 'datetime'}),
  ],
})

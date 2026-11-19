import {defineArrayMember, defineField, defineType} from 'sanity'

export const profile = defineType({
  name: 'profile',
  type: 'document',
  fields: [
    defineField({name: 'username', type: 'string'}),
    defineField({name: 'alias', type: 'string'}),
    defineField({
      name: 'name',
      type: 'object',
      fields: [
        defineField({name: 'first', type: 'string'}),
        defineField({name: 'middle', type: 'string'}),
        defineField({name: 'last', type: 'string'}),
        defineField({name: 'secondLast', type: 'string'}),
      ],
    }),
    defineField({
      name: 'bio',
      type: 'object',
      fields: [
        defineField({name: 'short', type: 'localeString'}),
        defineField({name: 'medium', type: 'localeText'}),
        defineField({name: 'long', type: 'localeText'}),
      ],
    }),
    defineField({name: 'jobTitle', type: 'localeString'}),
    defineField({
      name: 'knowsAbout',
      type: 'array',
      of: [defineArrayMember({type: 'localeString'})],
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'role',
              type: 'string',
              options: {list: ['avatar', 'cover', 'cutout', 'og']},
            }),
            defineField({
              name: 'image',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({
                  name: 'alt',
                  type: 'localeString',
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {select: {title: 'alias', subtitle: 'username'}},
})

import {defineArrayMember, defineField, defineType} from 'sanity'

const cssColor = /^(#[0-9a-f]{6}|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\))$/i

const colorRoles = [
  'bg',
  'surface',
  'ink',
  'inkMuted',
  'line',
  'accent',
  'accentText',
  'onAccent',
  'focus',
]

export const palette = defineType({
  name: 'palette',
  type: 'object',
  fields: [
    ...colorRoles.map((name) =>
      defineField({name, type: 'string', validation: (rule) => rule.regex(cssColor)}),
    ),
    defineField({
      name: 'activity',
      type: 'array',
      of: [defineArrayMember({type: 'string', validation: (rule) => rule.regex(cssColor)})],
    }),
  ],
})

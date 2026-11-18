import {defineType} from 'sanity'
import {locales} from './locales'

const defineLocaleType = (name: string, type: 'string' | 'text') =>
  defineType({
    name,
    type: 'object',
    fields: locales.map((locale) => ({name: locale, type})),
  })

export const localeString = defineLocaleType('localeString', 'string')
export const localeText = defineLocaleType('localeText', 'text')

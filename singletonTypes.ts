import {profile} from './schemaTypes/profile'
import {theme} from './schemaTypes/theme'

export const singletonTypes = new Set<string>([profile.name, theme.name])

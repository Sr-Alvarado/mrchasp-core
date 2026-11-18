import type {StructureResolver} from 'sanity/structure'
import {profile} from './schemaTypes/profile'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Profile')
        .id(profile.name)
        .child(S.document().schemaType(profile.name).documentId(profile.name)),
      ...S.documentTypeListItems().filter((item) => item.getId() !== profile.name),
    ])

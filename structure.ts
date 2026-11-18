import type {StructureResolver} from 'sanity/structure'
import {singletonTypes} from './singletonTypes'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...[...singletonTypes].map((name) =>
        S.documentTypeListItem(name).child(S.document().schemaType(name).documentId(name)),
      ),
      ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId() ?? '')),
    ])

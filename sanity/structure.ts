import { StructureBuilder, StructureResolverContext } from 'sanity/structure'

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('News Articles')
        .child(
          S.documentTypeList('article')
            .title('News Articles')
            .filter('_type == "article"')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['article'].includes(listItem.getId() || '')
      ),
    ])
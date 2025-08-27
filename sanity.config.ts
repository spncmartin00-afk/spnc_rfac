import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { schemaTypes } from './sanity/schemas'
import { structure } from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Senior Pride Network Canada',

  projectId: '8n60tecr',
  dataset: 'articles',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
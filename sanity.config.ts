import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanitywithskiller',

  projectId: '1nfyl9bk',
  dataset: 'skiller',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

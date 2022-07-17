import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
const { Schema } = mongoose

const schema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})

const __filename = fileURLToPath(import.meta.url)
const CollectionName = path.basename(__filename, '.mjs')
const ModelName = CollectionName
export { CollectionName, ModelName }

export const Blog = mongoose.model(
  ModelName, schema, CollectionName
)

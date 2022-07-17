import mongoose from 'mongoose'
import { encode as msgpackEncode } from 'msgpack-lite'
function encode (input, options) {
  if (input instanceof mongoose.Model) {
    return msgpackEncode(JSON.parse(JSON.stringify(input.toJSON())), options)
  }
  return msgpackEncode(JSON.parse(JSON.stringify(input)), options)
}
export { encode }

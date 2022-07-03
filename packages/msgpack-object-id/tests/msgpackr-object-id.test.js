/* eslint-env jest */
import { pack, unpack, addExtension } from 'msgpackr'
import { Blog } from '../model/blog.mjs'
import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types
addExtension({
  Class: Date,
  type: 1,
  pack (instance) {
    return Buffer.from(instance.toISOString())
  },
  unpack (buffer) {
    return buffer.toString()
  }
})

addExtension({
  Class: ObjectId,
  type: 2,
  pack (instance) {
    return Buffer.from(instance.toString())
  },
  unpack (buffer) {
    return buffer.toString()
  }
})

describe('packer', () => {
  const fixtureBlog = new Blog({
    _id: new ObjectId('62c1502805995744c8a13a4c'),
    title: 'test',
    comments: [],
    date: new Date('2022-07-03T08:42:11.754Z')
  })
  const fixtureData = Buffer.from('de0004a57469746c65a474657374a8636f6d6d656e747390a464617465c71801323032322d30372d30335430383a34323a31312e3735345aa35f6964c71802363263313530323830353939353734346338613133613463', 'hex')

  it('pack', async () => {
    expect(pack(fixtureBlog.toJSON()).toString('hex')).toStrictEqual(fixtureData.toString('hex'))
  })

  it('unpack', async () => {
    expect(unpack(fixtureData)).toStrictEqual(JSON.parse(JSON.stringify(fixtureBlog)))
  })
})

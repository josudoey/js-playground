/* eslint-env jest */
import { encode } from '../index.js'
import mongoose from 'mongoose'
import { Blog } from './model/blog.mjs'
const { ObjectId } = mongoose.Types

describe('encode', () => {
  const fixtureBlog = new Blog({
    _id: new ObjectId('62c1502805995744c8a13a4c'),
    title: 'test',
    comments: [],
    date: new Date('2022-07-03T08:42:11.754Z')
  })

  it('encode', async () => {
    const encoded = encode(fixtureBlog)
    expect(encoded.toString('hex')).toStrictEqual(encode({
      title: 'test',
      comments: [],
      date: '2022-07-03T08:42:11.754Z',
      _id: '62c1502805995744c8a13a4c'
    }).toString('hex'))
  })
})

/* eslint-env jest */
import { decode } from '../index.js'

describe('encode', () => {
  const fixtureData = Buffer.from('84a57469746c65a474657374a8636f6d6d656e747390a464617465b8323032322d30372d30335430383a34323a31312e3735345aa35f6964b8363263313530323830353939353734346338613133613463', 'hex')

  it('decode', async () => {
    const decoded = decode(fixtureData)
    expect(decoded).toStrictEqual({
      title: 'test',
      comments: [],
      date: '2022-07-03T08:42:11.754Z',
      _id: '62c1502805995744c8a13a4c'
    })
  })
})

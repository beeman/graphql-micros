import * as crypto from 'crypto'
import * as unfurl from 'unfurl.js'

const hash = str =>
  crypto
    .createHash('md5')
    .update(str)
    .digest('hex')

const baseUrl = 'http://www.gravatar.com/avatar'
const url = (email, size) => `${baseUrl}/${hash(email)}?s=${size}`

const emailMap = {}
const readCache = (email, size) => emailMap[email + size]
const writeCache = (email, size) => {
  emailMap[email + size] = url(email, size)
  return readCache(email, size)
}
const getUrl = (email, size) => {
  const existing = readCache(email, size)
  return existing ? existing : writeCache(email, size)
}

export const gravatarUrl = (email, size = 150) => getUrl(email, size)

export const unfurlUrl = async url => {
  const { ogp, other } = await unfurl(url)
  return { ogp, other }
}
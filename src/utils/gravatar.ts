import * as crypto from 'crypto'

const hash = str =>
  crypto
    .createHash('md5')
    .update(str)
    .digest('hex')

const baseUrl = 'http://www.gravatar.com/avatar'
const url = (email, size) => `${baseUrl}/${hash(email)}?s=${size}&d=mp`

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

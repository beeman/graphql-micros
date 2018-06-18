import * as unfurl from 'unfurl.js'

export const unfurlUrl = async url => {
  const { ogp, other } = await unfurl(url)
  return { ogp, other }
}

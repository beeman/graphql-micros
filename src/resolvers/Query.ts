import { gravatarUrl, unfurlUrl } from '../utils'

export const Query = {
  gravatar: (_, { email, size }) => {
    return gravatarUrl(email, size)
  },
  unfurl: async (_, { url }) => {
    return await unfurlUrl(url)
  }
}
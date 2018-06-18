import { checkPassword, gravatarUrl, unfurlUrl } from '../utils'

export const Query = {
  gravatar: (_, { email, size }) => {
    return gravatarUrl(email, size)
  },
  password: async (_, { password, remote }) => {
    return await checkPassword(password, remote)
  },
  unfurl: async (_, { url }) => {
    return await unfurlUrl(url)
  }
}
// CREDITS: I got this from here:
// https://gist.github.com/detroitenglish/0ccd3d47ceff2a68cd116a40a0edf726
import axios from 'axios'
import * as crypto from 'crypto'
import * as zxcvbn from 'zxcvbn'

const pwnedUrl = p => `https://api.pwnedpasswords.com/range/${p}`

async function hackedPassword(pw) {
  const hash = Array.from(
    await crypto
      .createHash('sha1')
      .update(pw)
      .digest('hex')
      .toUpperCase(),
  )
  const prefix = hash.splice(0, 5).join('')
  const suffix = hash.join('')

  const url = pwnedUrl(prefix)

  let result = await axios({ url, method: 'GET' })
    .then(result => result.data)
    .catch(err => {
      throw new Error(`Unable to check password pwnage`)
    })

  if (!result.includes(suffix)) {
    return 0
  }

  result = result.split('\r\n')

  // Update: realized a hash table wasn't necessary
  const match = result.find(r => r.includes(suffix))
  const hits = match.split(':')[1]
  return +hits
}

export const checkPassword = async (password: string, remote: boolean) => {
  let error: string
  let remoteResult: number
  let { score } = zxcvbn(password)
  if (remote) {
    try {
      remoteResult = await hackedPassword(password)
    } catch (err) {
      error = err.error
    }
  }
  score = remoteResult ? 0 : score
  return {
    score,
    scorePercentage: score * 25,
    remote: remoteResult,
    error,
  }
}

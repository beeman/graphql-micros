import gql from 'graphql-tag'

export const typeDefs = gql`
    scalar JSON

    type PasswordResult {
        error: String
        remote: Int
        score: Int!
        scorePercentage: Int!
    }

    type UnfurlResult {
        ogp: JSON
        other: JSON
    }

    type Query {
        gravatar(email: String! size: Int): String
        password(password: String! remote: Boolean): PasswordResult
        unfurl(url: String!): UnfurlResult
    }
`

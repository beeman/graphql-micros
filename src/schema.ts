import gql from 'graphql-tag'

export const typeDefs = gql`
    scalar JSON

    type UnfurlResult {
        ogp: JSON
        other: JSON
    }

    type Query {
        gravatar(email: String! size: Int): String
        unfurl(url: String!): UnfurlResult
    }
`

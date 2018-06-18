import gql from 'graphql-tag'

export const typeDefs = gql`
    scalar JSON

    type PasswordResult {
        error: String
        percentage: Int!
        remote: Int
        score: Int!
    }
    type OgpUrlType {
        url: String
    }
    type OgpType {
        ogImage: [OgpUrlType]
        ogSiteName: String
        ogType: String
        ogTitle: String
        ogUrl: String
        ogDescription: String
    }
    type UnfurlResult {
        ogp: OgpType
        other: JSON
    }

    type Query {
        gravatar(email: String! size: Int): String
        password(password: String! remote: Boolean): PasswordResult
        unfurl(url: String!): UnfurlResult
    }
`

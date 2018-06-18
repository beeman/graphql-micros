# GraphQL Micros

Playground of a GraphQL server that delivers some commonly used functionality.

## Examples

Try these examples on [graphql-micros.now.sh](https://graphql-micros.now.sh/).

```graphql
query {
  # Fetch profile data from remote sites 
  unfurl(url: "https://github.com/beeman") {
    ogp {
      image:ogImage { url }
      siteName:ogSiteName
      type:ogType
      title:ogTitle
      url:ogUrl
      description:ogDescription
    }
  }
  # Password check based on analytics
  # and remote check using haveibeenpwned.com api
  weak:password(password: "password" remote: true) {
    percentage
    remote
  }
  strong:password(password: "[P]a$^2w0rt" remote: true) {
    percentage
    remote
  }
  # Generate a Gravatar URL based on the Email address
  gravatar(email: "borggreve@gmail.com" size: 200) 
}
```

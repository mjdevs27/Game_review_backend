export const typeDefs = `#graphql
    type Game{
        id : ID!
        title : String!
        platform : [String!]!
        reviews : [Review!]
    }
    type Review{
        id:ID!
        rating : Int!
        content : String!
        games : Game!
        author : Author!
    }
    type Author{
        id : ID!
        name : String!
        verified : Boolean!
        reviews : [Review!]
        games : [Game!]
    }
    type Query {
        authors : [Author]
        reviews: [Review]
        games:[Game]
        review(id : ID!):Review
        game(id : ID!):Game
        author(id : ID!):Author
    }
`
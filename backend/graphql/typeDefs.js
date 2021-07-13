const gql = require('graphql-tag')

module.exports = gql`
        type Ingredient{
            id: ID!
            name: String!
            qty: Int!
            measurment: String!
            store: String
        }
        type Query{
            getAllIngredients: [Ingredient]
            getIngredientById(ingredientId: ID!): Ingredient
            getIngredientsByStore(store: String!): [Ingredient]
            getStores: [String]
            getIngredientCount: Int!
        }
        type Mutation{
            createIngredient(name: String!, qty: String!, measurment: String!, store: String): Ingredient!
            deleteIngredient(ingredientId: ID!): String!
        }
`

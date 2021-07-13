import gql from 'graphql-tag'

export const CREATE_NEW_INGREDIENT = gql`mutation($name: String! $qty: String! $measurment: String! $store: String!){ 
    createIngredient(name: $name qty: $qty measurment: $measurment store: $store)
     {id
     name
     qty
     measurment
     store}                
 }`

 export const DELETE_INGREDIENT = gql`mutation($ingredientId: ID!) {
    deleteIngredient(ingredientId: $ingredientId)
  }`
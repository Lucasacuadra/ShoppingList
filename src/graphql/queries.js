import gql from 'graphql-tag'
 
export const GET_ALL_INGREDIENTS = gql`
query {
  getAllIngredients{
    id
    name
    qty
    measurment
    store
  }
}
`

export const GET_INGREDIENT_BY_STORE = gql`query($store: String!) {
    getIngredientsByStore(store: $store)
     {id
     name
     qty
     measurment
     store}                 
}`

export const GET_STORES = gql`query {
  getStores           
}`

export const GET_INGREDIENT_COUNT = gql`query {
  getIngredientCount
}`
<template>
    <div>
       <div class="ingredient" :key="ingredient.id+getIngredientCount" v-for="ingredient in getIngredientsByStore">
            <Ingredient :ingredient="ingredient" @deleteIngredient="deleteIngredient" />
        </div>      
    </div>   
</template>

<script>
import Ingredient from './Ingredient.vue'
import {GET_INGREDIENT_BY_STORE, GET_INGREDIENT_COUNT} from '../graphql/queries'
import {DELETE_INGREDIENT} from '../graphql/mutations'

export default {
    name: 'IngredientContainer',
    components: {Ingredient},
    props: {
        store: {
            type: String
        }
    },
    apollo: {
        getIngredientsByStore: { 
            query: GET_INGREDIENT_BY_STORE,
            variables() {
                return {
                    store: this.store
                }
            }
        },
        getIngredientCount: {
            query: GET_INGREDIENT_COUNT
        }                  
    },
    methods: {
        deleteIngredient(id){
            try {
                this.$apollo.mutate({
                mutation: DELETE_INGREDIENT,
                variables: {
                    ingredientId: id
                },    
            })
            this.$apollo.queries.getIngredientsByStore.refetch()
            } catch (error) {
                console.log(error)
            }
        }
    },
    watch: {
        getIngredientCount: function() {
            this.$apollo.queries.getIngredientsByStore.refetch()
        }  
    }
}
</script>

<style scoped>

.ingredient {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
}

</style>
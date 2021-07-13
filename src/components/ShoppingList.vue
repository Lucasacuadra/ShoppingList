<template>
  <div class="hello">
    
    <v-dialog v-model="dialog" max-width="1000">
      <NewIngredient @closeDialog="closeDialog" />
    </v-dialog>

    <h1 @click="onClick">Shopping List</h1>

      <v-tabs fixed-tabs v-model="test">
        <v-tab grow :key="store" v-for="store in getStores">
          {{store}}
        </v-tab>
      </v-tabs>

     <v-tabs-items v-model="test">
        <v-tab-item class="container" :key="store+getIngredientCount" v-for="store in getStores">
          <IngredientContainer :store="store" />
        </v-tab-item>
      </v-tabs-items> 

    <v-btn @click="dialog=true" right fixed bottom large transition="slide-y-reverse-transition" fab dark color="#03A9F4">
      <v-icon dark large>mdi-plus</v-icon>
    </v-btn>
      
  </div>
</template> 

<script>
import IngredientContainer from './IngredientContainer'
import NewIngredient from './NewIngredient.vue'
import {GET_INGREDIENT_COUNT, GET_STORES} from '../graphql/queries'

export default {
  components: {IngredientContainer, NewIngredient},
  name: 'ShoppingList',
  data() {
    return {
      test: null,
      stores: [],
      dialog: false 
    }
  },
  apollo: {
    //fetches all stores from the db
    getStores: GET_STORES,
    getIngredientCount: GET_INGREDIENT_COUNT
  },
  methods: {
    onClick(){
            console.log(this)
        },
    //closes the dialog (Ingredient Input) and refetches the stores from the db
    closeDialog: function(){
        this.dialog = false;
        this.$apollo.queries.getStores.refetch()
        this.$apollo.queries.getIngredientCount.refetch()
    }
  }
}
</script>

<style scoped>
  h1 {
    margin: 10px 0;
    text-align: center;
  }
  
  .container {
        margin: 30px auto;
        width: 60%;
  }
</style>

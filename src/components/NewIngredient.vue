<template>
  <v-card>
    <v-card-title class="text-h5">
        Add a new Ingredient
    </v-card-title>
    <v-card-text>
        <v-form ref="form" v-model="valid">
            <v-text-field v-model="name" :rules="rules" label="Name" required></v-text-field>
            <v-text-field v-model="qty" :rules="rules" label="Qty" required></v-text-field>
            <v-text-field v-model="measurment" :rules="rules" label="Measurment" required></v-text-field>
            <v-text-field v-model="store" :rules="rules" label="Store" required></v-text-field>
            <v-btn color="success" class="mr-4" @click="submit">Submit</v-btn>
            <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
            <v-btn color="warning" @click="cancel">Cancel</v-btn>
        </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import {CREATE_NEW_INGREDIENT} from '../graphql/mutations.js'

export default {
    name: 'NewIngredient',
    data: () => ({
      valid: true,
      rules: [
        v => !!v || 'Input is required'
      ],
      name: '',
      qty: '',
      measurment: '',
      store:''
      
    }),
    methods: {
        //submits the input and clears/closes the dialog
        submit () {
            try {
                this.$apollo.mutate({
                    mutation: CREATE_NEW_INGREDIENT,
                    variables: {
                        name: this.name,
                        qty: this.qty,
                        measurment: this.measurment,
                        store: this.store
                    } 
                })   
                this.$refs.form.reset()
                this.$emit("closeDialog")
            } catch (error) {
                console.log(error)
            }
        },
        //clears the form from any input
        reset () {
            this.$refs.form.reset()
        },
        //clears the form from any input and closes the dialog
        cancel () {
            this.$refs.form.reset()
            this.$emit('closeDialog')
        },
    },
  }
</script>

<style>

</style>
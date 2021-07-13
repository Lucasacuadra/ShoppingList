const Ingredient = require('../../models/Ingredient')

module.exports = {
    Query: {
        async getAllIngredients(parent, args, context, info){
            try {
                const ingredients = await Ingredient.find()
                return ingredients
            } catch(err) {
            throw new Error(err)
            }
        },
        async getIngredientById(parent, args, context, info){
            try{
                const ingredient = await Ingredient.find({_id: args.ingredientId})
                return ingredient
            } catch(err) {
                throw new Error(err)
            }
        },
        async getIngredientCount(){
            try {
                const ingredients = await Ingredient.find()
                const ingredientCount = ingredients.length

                return ingredientCount
            } catch (error) {
                console.log(error)
            }
        },
        async getStores(){
            try {
                const ingredients = await Ingredient.find()
                const stores = []
                ingredients.map(ingredient => {
                    {if(!stores.includes(ingredient.store)){
                    stores.push(ingredient.store)}
                }})
                return stores
            } catch (error) {
                console.log(error)
            }
            
        },
        async getIngredientsByStore(parent, args, context, info){ 
            try{
                const ingredientsByStore = await Ingredient.find({store: args.store})
                return ingredientsByStore
            } catch(err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async createIngredient(_, {name, qty, measurment, store}){
            
            if(name.trim() === ''){
                throw new Error('Name must be not empty')
            }

            const ingredient = new Ingredient({
                name,
                qty,
                measurment,
                store
            })

            const newIngredient = await ingredient.save()
                
            return newIngredient
        },
        async deleteIngredient(_, {ingredientId}){

            await Ingredient.findByIdAndDelete(ingredientId)
            
            return "Ingredient deleted"
        }
    }
}


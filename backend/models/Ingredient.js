const {model, Schema} = require('mongoose')

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    measurment: {
        type: String,
        required: true
    },
    store: {
        type: String,
        default: "general"
    },
}, {
    timestamps: true
})

module.exports = model('Ingredient', ingredientSchema)
const ingredientsResolvers = require('./ingredients')

module.exports = { 
    Query: {
        ...ingredientsResolvers.Query,
    }, 
    Mutation: {
        ...ingredientsResolvers.Mutation
    }  
}
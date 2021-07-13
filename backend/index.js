const {ApolloServer} = require('apollo-server')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

dotenv.config()
connectDB()

const server = new ApolloServer({
    typeDefs, 
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    })

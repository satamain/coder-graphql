require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')

const db = require('./db')
const resolvers = require('./resolvers')
const context = require('./config/context')

const schemaPath = './src/schemas/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers,
    context
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})
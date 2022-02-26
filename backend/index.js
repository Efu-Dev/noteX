import express from 'express'; //npm i express
import { ApolloServer, gql } from 'apollo-server-express'; //npm i apollo-server-express graphql
import mongoose from 'mongoose'; //npm i mongoose
import dotenv from 'dotenv';
import typeDefs  from './schema.js';
import resolvers from './resolvers/index.js';
import models from './models/index.js';

dotenv.config();

//GraphQL type definitions.

//Backend server definition.
const PORT = process.env.PORT || 4000;
const server = new ApolloServer({ typeDefs, resolvers, context: () => models });
const app = express();
await server.start();

//API definition.
server.applyMiddleware({app, path: "/api"});
app.get('/', (req, res) => res.send("Hello! This is the root of the NoteX API."));

mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}${server.graphqlPath}`)))
   .catch((error) => {console.log(error.message); process.exit()});
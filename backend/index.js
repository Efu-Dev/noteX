import express from 'express'; //npm i express
import cors from 'cors'; //npm i cors
import { ApolloServer } from 'apollo-server-express'; //npm i apollo-server-express graphql
import mongoose from 'mongoose'; //npm i mongoose
import helmet from 'helmet'; //npm i helmet
import jwt from 'jsonwebtoken'; //npm i jsonwebtoken
import dotenv from 'dotenv'; //npm i dotenv
import depthLimit from 'graphql-depth-limit'; //npm i graphql-depth-limit
import {createComplexityLimitRule, CreateComplexityLimitRule} from 'graphql-validation-complexity'; //npm i graphql-validation-complexity'
import typeDefs  from './schema.js';
import resolvers from './resolvers/index.js';
import models from './models/index.js';

dotenv.config();

//token verification.
const getUser = (req) => {
    const token = req.headers.authorization;
    if(token){
        console.log("TOKEN: " + token)
        try{            
            const user =  jwt.verify(token, process.env.JWT_SECRET);
            return user;
        } catch(err){
            console.log(err);
            return;
        }
    }
};

//Backend server definition.
const PORT = process.env.PORT || 4000;
const server = new ApolloServer({ typeDefs, 
    resolvers,
    validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
    context: async ({req}) => {
    const user = getUser(req);
    return {models, user};
}});

const app = express();
//app.use(helmet());
app.use(cors());
await server.start();

//API definition.
server.applyMiddleware({app, path: "/api"});
app.get('/', (req, res) => res.send("Hello! This is the root of the NoteX API."));

mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}${server.graphqlPath}`)))
   .catch((error) => {console.log(error.message); process.exit()});
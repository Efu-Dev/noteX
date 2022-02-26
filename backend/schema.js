import { gql } from "apollo-server-express";

const typeDefs = gql`
 type Query {
    notes: [Note!]!
    note(id: ID!): Note!
 }

 type Note {
    id: ID!
    title: String!
    content: String!
    author: String!
 }

 type Mutation {
    newNote(title: String!, content: String!): Note!
 }
`;

export default typeDefs;
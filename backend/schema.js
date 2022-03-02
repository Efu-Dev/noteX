import { gql } from "apollo-server-express";

const typeDefs = gql`
 scalar DateTime

 type Query {
    notes: [Note!]!
    note(id: ID!): Note!
    user(username: String!): User
    users: [User!]!
    me: User!
    noteFeed(cursor: String): NoteFeed
 }

 type Note {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    favoriteCount: Int!
    favoritedBy: [User!]
 }

 type User{
    id: ID!
    username: String!
    email: String!
    avatar: String!
    notes: [Note!]!
    favorites: [Note!]!
 }

 type NoteFeed {
   notes: [Note]!
   cursor: String!
   hasNextPage: Boolean!
  }

 type Mutation {
    newNote(title: String!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
    updateNote(id: ID!, content: String!): Note!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
    toggleFavorite(id: ID!): Note!
 } 
`;

export default typeDefs;
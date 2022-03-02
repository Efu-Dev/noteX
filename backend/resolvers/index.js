import Mutation from './mutation.js';
import Query from './query.js';
import Note from './Note.js';
import User from './User.js';
import GraphQLDateTime from 'graphql-iso-date';

const resolvers = {Mutation, Query, Note, User, DateTime: GraphQLDateTime};

export default resolvers;
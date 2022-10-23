import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "../graphql/resolvers/";
import { typeDefsGlobal } from "../graphql/typeDefs";

const typeDefs = typeDefsGlobal;

const server = new ApolloServer( {
    typeDefs,
    resolvers
 } );



export { server }
import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    test(message: String!): String!
  }
`;

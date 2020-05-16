export const resolvers = {
  Query: {
    test: (_, { message }: { message: string }): string => message,
  },
};

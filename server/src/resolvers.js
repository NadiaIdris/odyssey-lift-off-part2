const resolvers = {
  Query: {
    // Returns an array of Tracks that will be used to populate the homepage grid of our web client.
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  // Track resolver is for the Track type in our schema.
  Track: {
    // author is the resolver function for the author field of the Track type.
    author: ({ authorID }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorID);
    },
  },
};

module.exports = resolvers;

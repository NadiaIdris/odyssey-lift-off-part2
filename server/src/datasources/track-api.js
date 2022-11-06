const { RESTDataSource } = require("apollo-datasource-rest");
// Importing the RESTDataSource class from the apollo-datasource-rest package gives us a `RESTDataSource`
// class that we can extend to create a custom data source class.

class TrackAPI extends RESTDataSource {
  constructor() {
    super(); // We call super(), so that we can access the properties and methods of the RESTDataSource class.
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}

module.export = TrackAPI;

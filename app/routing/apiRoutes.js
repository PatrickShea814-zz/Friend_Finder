// DEPENDENCIES
// ===============================================================================

var friends = require("../data/friends");

// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests for when a user submits a form which submits data to the server.
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // The results of a user's survey is compared to the friends in the database by finding the least difference in points.

    // The best match will constantly update as we loop through all of the options
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    // Here we take the result of the user's survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;

    // This variable will calculate the difference between scores.
    var totalDifference;

    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      // We then loop through all the scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    // JSON is pushed to the appropriate JavaScript array
    // Save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    friends.push(userData);

    
    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);
  });
};

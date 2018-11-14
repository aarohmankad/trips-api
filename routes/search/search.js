const google = require('../../services/google');

module.exports = function(router) {
  // A POST request to /api/users will
  // create a user based on request body
  router.get('/search', function(req, res) {
    google
      .findPlace(req.query.input)
      .then(candidates => {
        res.send(candidates);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  });
};
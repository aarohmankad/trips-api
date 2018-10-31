const maps = require('@google/maps');

const { key } = require('../config/GOOGLE');
const client = maps.createClient({
  key,
  Promise,
});

module.exports = {
  findPlace: input => {
    return client
      .findPlace({
        input,
        inputtype: 'textquery',
        fields: [
          'formatted_address',
          'id',
          'name',
          'photos',
          'place_id',
          'price_level',
          'rating',
        ],
      })
      .asPromise()
      .then(response => {
        return response.json.candidates;
      })
      .catch(console.error);
  },
};

const maps = require('@google/maps');

const client = maps.createClient({
  key: 'AIzaSyDGZMTb_uccDom9FtaJZ1zfxgbajgzOl3A',
  Promise,
});

module.exports = {
  findPlace: input => {
    return client
      .findPlace({
        input: 'Eiffel Tower',
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

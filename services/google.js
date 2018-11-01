const maps = require('@google/maps');
const request = require('superagent');

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
        const candidates = response.json.candidates;
        const promises = candidates.map((candidate, index) =>
          client
            .placesPhoto({
              photoreference: candidate.photos[0].photo_reference,
              maxheight: 400,
              maxwidth: 400,
            })
            .asPromise()
            .then(photoData => request.get(photoData.requestUrl))
            .then(
              data => (candidates[index].populatedPhoto = data.redirects[0])
            )
        );

        return Promise.all(promises).then(_ => candidates);
      })
      .catch(console.error);
  },
};

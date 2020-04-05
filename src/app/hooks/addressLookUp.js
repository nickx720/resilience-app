const mbxClient = require('@mapbox/mapbox-sdk');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
const baseClient = mbxClient({ accessToken: process.env.REACT_APP_MB_ACCESS_TOKEN });
const geoCodingService = mbxGeocoding(baseClient);

export default function addressLookUp(address) {
    !address ? console.log('No address to query with') :
    geoCodingService.forwardGeocode({
        query: address,
        limit: 5
      })
        .send()
        .then(response => {
          const match = response.body;
          const newObject = {
              lat: match.features[0].center[1],
              long: match.features[0].center[0]
          }
          console.log(newObject)
          return newObject;
    });
};
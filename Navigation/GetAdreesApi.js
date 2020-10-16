// file de la fonction qui extrait l'adresse depuis latitude et longitude du marker sur la map
// utilisé dans Changeposition.js
const mapquestapi = "http://open.mapquestapi.com/geocoding/v1/reverse?"
const mapquestapiKey = "sGGb4gMwz9mjuy1dGIuKg6OWdBG3fTkU"

export function getAddress(lat, lng, cb){
    // myHeaders.append("Cookie", "JSESSIONID=2994806B78151485E3367469739E2570");
    const requestOptions = {
      method: 'GET',
      headers: { 
        "Content-Type": "application/json",
    },
      redirect: 'follow'
    };
    
    fetch(`${mapquestapi}key=${mapquestapiKey}&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`, requestOptions)
      .then(response => response.text())
      .then(result => cb(JSON.parse(result)))
      .catch(error => console.log('error', error));
}

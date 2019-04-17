export function getQuakes(query) {
  const oneWeek = 604800000;
  const today = new Date();
  const oneWeekAgo = new Date(today - oneWeek);
  return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${oneWeekAgo.toDateString()}&latitude=${query.lat}&longitude=${query.lon}&maxradiuskm=${query.rad}&minmagnitude=${query.mag}`)
    .then(res => res.json());
}


export function getCity(city) {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As`)
    .then(res => res.json())
    .then(json => json.results[0]);
}

export function findQuake(id) {
  return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${id}`)
    .then(res => res.json());
}

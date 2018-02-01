export function getQuakes(query) {
  const one_week = 604800000;
  const today = new Date();
  const one_week_ago = new Date(today - one_week);
  return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${one_week_ago.toDateString()}&latitude=${query.lat}&longitude=${query.lon}&maxradiuskm=${query.rad}&minmagnitude=${query.mag}`)
  .then(res => res.json())
}


export function getCity(city) {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.REACT_APP_GOOGLE_KEY}`)
  .then(res => res.json())
  .then(json => json.results[0])
}

export function findQuake(id) {
  return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${id}`)
  .then(res => res.json())
}

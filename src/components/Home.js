import React, { Component } from 'react';
import Earthquake from './earthquake/Earthquake';
import UserSelection from './partials/UserSelection';
import SearchField from './partials/SearchField';
import { getQuakes, getCity } from '../services/earthquakes';

class Home extends Component {
  state = {
    earthquakes: [],
    radius: 2000,
    magnitude: 2,
    lon: 139,
    lat: 35,
    city: 'Tokyo, Japan',
  };

  componentDidMount() {
    this.fetchAPI();
  }

  handler = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.fetchAPI());
  }

  onSearch = name => (event) => {
    this.setState({ [name]: event.target.value });
  }

  searchCity = (city) => {
    getCity(city)
      .then((results) => {
        this.setState({
          lon: results.geometry.location.lng,
          lat: results.geometry.location.lat,
          city: results.formatted_address,
        }, () => { this.fetchAPI(); });
      })
      .catch(err => console.log(err));
  }

  fetchAPI = () => {
    const {
      lat, lon, magnitude, radius,
    } = this.state;
    getQuakes({
      mag: magnitude, rad: radius, lat, lon,
    })
      .then(json => this.setState({
        earthquakes: json.features.slice(0, 10),
      }));
  }

  render() {
    const {
      magnitude, radius, earthquakes, city,
    } = this.state;
    return (
      <div>
        <div className="top-section">
          <UserSelection
            magnitude={magnitude}
            radius={radius}
            handler={this.handler}
          />
          <h2>{`${earthquakes.length} earthquakes near:`}</h2>
          <h2>{city}</h2>
        </div>

        <SearchField defaultSearch={city} searchCity={this.searchCity} />

        <div className="quake-list">
          {earthquakes.map(earthquake => (
            <Earthquake key={earthquake.id} quake={earthquake} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;

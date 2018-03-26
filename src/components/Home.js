import React                   from 'react';
import { Component }           from 'react';
import Earthquake              from './Earthquake';
import UserSelection           from './UserSelection';
import { getQuakes, getCity }  from '../services/earthquakes';
import SearchBar               from 'material-ui-search-bar';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      earthquakes: [],
      radius: 2000,
      magnitude: 2,
      lon: 139,
      lat: 35,
      city: "Tokyo, Japan"
    }
    this.handler      = this.handler.bind(this);
    this.searchCity   = this.searchCity.bind(this);
    this.fetchAPI     = this.fetchAPI.bind(this);
  }

  componentWillMount() {
    this.fetchAPI();
  }

  handler(event, index, value) {
		if (value < 10) { this.setState({magnitude: value}, () => this.fetchAPI() )}
		if (value > 10) { this.setState({radius: value}, () => this.fetchAPI() )}
  }

  searchCity() {
    getCity(this.state.city)
    .then(results => this.setState({
        lon: results.geometry.location.lng,
        lat: results.geometry.location.lat,
        city: results.formatted_address
      }, () => {this.fetchAPI()})
    )
  }

  fetchAPI() {
		const { lat, lon, magnitude, radius } = this.state;
    getQuakes({mag: magnitude, rad: radius, lat: lat, lon: lon})
    .then(json => this.setState({
      earthquakes: json.features.slice(0,10),
    }))
  }

  render() {
    const { magnitude, radius, city, earthquakes } = this.state;
    return(
      <div>
        <div className="top-section">
          <UserSelection magnitude={magnitude} radius={radius} handler={this.handler} />
          <h2>({earthquakes.length}) earthquakes near:<br/><br/>{city}</h2>
        </div>

        <div className="search-bar">
          <SearchBar
            onChange={(val) => this.setState({ city: val })}
            onRequestSearch={ this.searchCity }
            hintText="Search City: Tokyo, Berlin..."
          />
        </div>

        <div className="quake-list">
          { earthquakes.map((earthquake, i) =>
            <Earthquake key={i} quake={earthquake} />)
          }
        </div>
      </div>
    )
  }
}

export default Home

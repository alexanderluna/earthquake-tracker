import React          from 'react';
import { Component }  from 'react';
import AppBar         from 'material-ui/AppBar';
import FlatButton     from 'material-ui/FlatButton';
import EarthquakeList from './EarthquakeList';
import UserSelection  from './UserSelection';
import { getQuakes }  from '../services/earthquakes';
import { getCity   }  from '../services/earthquakes';
import SearchBar      from 'material-ui-search-bar'

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
    this.fetchAPI({});
  }

  handler(event, index, value) {
    if (value < 10) { this.fetchAPI({mag: value}) };
    if (value > 10) { this.fetchAPI({rad: value}) };
  }

  searchCity() {
    getCity(this.state.city)
    .then(results => this.setState({
        lon: results.geometry.location.lng,
        lat: results.geometry.location.lat,
        city: results.formatted_address
      }, () => {
        this.fetchAPI({
          lat: results.geometry.location.lat,
          lon: results.geometry.location.lng
        })
      })
    )
  }

  fetchAPI(query) {
    const mag = query.mag || this.state.magnitude;
    const rad = query.rad || this.state.radius;
    const lat = query.lat || this.state.lat;
    const lon = query.lon || this.state.lon;
    getQuakes({mag: mag, rad: rad, lat: lat, lon: lon})
    .then(json => this.setState({
      earthquakes: json.features.slice(0,7),
      radius: rad,
      magnitude: mag
    }))
  }

  render() {
    return(
      <div>
        <AppBar
          title="Earthquake"
          style={{ backgroundColor: '#0aadd1' }}
          showMenuIconButton={false}
          iconElementRight={<FlatButton label="Account" />}
        />

        <SearchBar
          ref="search"
          onChange={(val) => this.setState({ city: val })}
          onRequestSearch={ this.searchCity }
          hintText="Search City: Tokyo, Berlin..."
        />

        <div className="top-section">
          <UserSelection
            magnitude={this.state.magnitude}
            radius={this.state.radius}
            handler={this.handler}
          />
          <h2>({this.state.earthquakes.length}) earthquakes near:</h2>
          <h2>{this.state.city}</h2>
        </div>
        <EarthquakeList list={this.state.earthquakes}/>
      </div>
    )
  }
}

export default Home

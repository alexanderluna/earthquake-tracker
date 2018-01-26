import React          from 'react';
import { Component }  from 'react';
import AppBar         from 'material-ui/AppBar';
import FlatButton     from 'material-ui/FlatButton';
import EarthquakeList from './EarthquakeList';
import SelectField    from 'material-ui/SelectField';
import MenuItem       from 'material-ui/MenuItem';
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

    this.handleChange = this.handleChange.bind(this);
    this.searchCity   = this.searchCity.bind(this);
  }

  componentWillMount() {
    this.fetchAPI({});
  }

  handleChange(event, index, value) {
    if (value < 10) { this.fetchAPI({rad: this.state.radius}) };
    if (value > 10) { this.fetchAPI({mag: this.state.magnitude}) };
  }

  searchCity() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.city}&key=${process.env.REACT_APP_GOOGLE_KEY}`)
    .then(res => res.json())
    .then(json => json.results[0])
    .then(results =>
      this.setState({
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
    const one_week = 604800000;
    const today = new Date();
    const one_week_ago = new Date(today - one_week);
    fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${one_week_ago.toDateString()}&latitude=${lat}&longitude=${lon}&maxradiuskm=${rad}&minmagnitude=${mag}`)
    .then(res => res.json())
    .then(json => this.setState({earthquakes: json.features.slice(0,7), radius: rad, magnitude: mag}))
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

        <SelectField
          className="select-field"
          floatingLabelText="Radius"
          value={this.state.radius}
          onChange={this.handleChange}
          autoWidth={true}
        >
          <MenuItem value={50} primaryText="50 KM" />
          <MenuItem value={100} primaryText="100 KM" />
          <MenuItem value={250} primaryText="250 KM" />
          <MenuItem value={500} primaryText="500 KM" />
          <MenuItem value={1000} primaryText="1000 KM" />
          <MenuItem value={2000} primaryText="2000 KM" />
          <MenuItem value={4000} primaryText="4000 KM" />
        </SelectField>

        <SelectField
          className="select-field"
          floatingLabelText="Magnitude"
          value={this.state.magnitude}
          onChange={this.handleChange}
          autoWidth={true}
        >
          <MenuItem value={2} primaryText="mag 2+" />
          <MenuItem value={3} primaryText="mag 3+" />
          <MenuItem value={4} primaryText="mag 4+" />
          <MenuItem value={5} primaryText="mag 5+" />
          <MenuItem value={6} primaryText="mag 6+" />
          <MenuItem value={7} primaryText="mag 7+" />
        </SelectField>
        <h2>({this.state.earthquakes.length}) earthquakes near {this.state.city}</h2>
        <EarthquakeList list={this.state.earthquakes}/>
      </div>
    )
  }
}

export default Home

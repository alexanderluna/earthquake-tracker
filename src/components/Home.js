import React          from 'react';
import { Component }  from 'react';
import AppBar         from 'material-ui/AppBar';
import FlatButton     from 'material-ui/FlatButton';
import EarthquakeList from './EarthquakeList';
import SelectField    from 'material-ui/SelectField';
import MenuItem       from 'material-ui/MenuItem';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      earthquakes: [],
      radius: 2000,
      magnitude: 2
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.fetchAPI(2, 2000);
  }

  handleChange(event, index, value) {
    if (value < 10) { this.fetchAPI(value, this.state.radius) };
    if (value > 10) { this.fetchAPI(this.state.magnitude, value) };
  }

  fetchAPI(mag, rad) {
    const one_week = 604800000;
    const today = new Date();
    const one_week_ago = new Date(today - one_week);
    const day = one_week_ago.getDate();
    const month = one_week_ago.getMonth() + 1;
    const year = one_week_ago.getFullYear();
    fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${year}-${month}-${day}&latitude=35&longitude=139&maxradiuskm=${rad}&minmagnitude=${mag}`)
    .then(res => res.json())
    .then(json => Object.values(json)[2])
    .then(earth_obj => this.setState({earthquakes: earth_obj, radius: rad, magnitude: mag}))
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
        <EarthquakeList list={this.state.earthquakes}/>
      </div>
    )
  }
}

export default Home

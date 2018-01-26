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
      radius: 2000
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.fetchAPI(2000);
  }

  handleChange(event, index, radius) {
    this.fetchAPI(radius);
  }

  fetchAPI(radius) {
    const one_week = 604800000;
    const today = new Date();
    const one_week_ago = new Date(today - one_week);
    const day = one_week_ago.getDate();
    const month = one_week_ago.getMonth() + 1;
    const year = one_week_ago.getFullYear();
    fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${year}-${month}-${day}&latitude=35&longitude=139&maxradiuskm=${radius}&minmagnitude=2`)
    .then(res => res.json())
    .then(json => Object.values(json)[2])
    .then(earth_obj => this.setState({earthquakes: earth_obj, radius: radius}))
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
        <EarthquakeList list={this.state.earthquakes}/>
      </div>
    )
  }
}

export default Home

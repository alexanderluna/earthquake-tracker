import React from 'react';
import { Component } from 'react';
import Earthquake from './Earthquake';

class EarthquakeList extends Component {
  render() {
    return(
      <div className="quake-list">
        { this.props.list.map((earthquake, i) =>
          <Earthquake key={i} quake={earthquake} />)
        }
      </div>
    )
  }
}

export default EarthquakeList;

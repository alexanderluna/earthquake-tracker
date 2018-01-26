import React, { Component } from 'react';
import {Card, CardHeader }  from 'material-ui/Card';
import EarthquakeMap        from './EarthquakeMap';
import Avatar               from 'material-ui/Avatar';
import { GoogleApiWrapper } from 'google-maps-react'
import usgs                 from '../usgs.png'

class Earthquake extends Component {

  formatDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  render() {
    const { google, quake } = this.props;
    return(
      <Card className="card">
        <a className="header-link" target="_blank" href={ quake.properties.url }>
          <CardHeader
            title={ quake.properties.title }
            subtitle={ this.formatDate(new Date(quake.properties.time)) }
            avatar={ <Avatar src={ usgs } alt="usgs icon"/>} />
        </a>
        <EarthquakeMap google={ google } quake={ quake }/>
      </Card>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  libraries: ['visualization']
})(Earthquake)

import React, { Component } from 'react';
import {Card, CardHeader }  from 'material-ui/Card';
import RaisedButton         from 'material-ui/RaisedButton';
import EarthquakeMap        from './EarthquakeMap';
import Avatar               from 'material-ui/Avatar';
import { GoogleApiWrapper } from 'google-maps-react'
import { Link }             from 'react-router-dom';
import Details              from './Details';
import usgs                 from '../usgs.png';

class Earthquake extends Component {

  formatDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  render() {
    const { google, quake } = this.props;
    return(
      <Card className="card">
        <CardHeader
          title={ quake.properties.title }
          subtitle={ this.formatDate(new Date(quake.properties.time)) }
          avatar={ <Avatar src={ usgs } alt="usgs icon"/>} />
        <EarthquakeMap google={ google } quake={ quake }/>
        { this.props.detail
          ? <Details quake={quake}/>
          : <RaisedButton
            containerElement={<Link to={`/quake/${quake.id}`}/>}
            label="Read More"
            secondary={true}
            fullWidth={true}
            />
        }

      </Card>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  libraries: ['visualization']
})(Earthquake)

import React, { Component } from 'react';
import { Avatar, Button, Card, CardHeader } from '@material-ui/core';
import { GoogleApiWrapper } from 'google-maps-react';
import { Link as RouterLink } from 'react-router-dom';
import EarthquakeMap from './EarthquakeMap';
import Details from './Details';
import usgs from '../../assets/usgs.png';

class Earthquake extends Component {
  AdapterLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));

  formatDate = date => (
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  )

  render() {
    const { google, quake, shareLink } = this.props;
    return (
      <Card className="card">
        <CardHeader
          title={quake.properties.title}
          subtitle={this.formatDate(new Date(quake.properties.time))}
          avatar={<Avatar src={usgs} alt="usgs icon" />}
        />
        {this.props.loaded && <EarthquakeMap google={google} {...quake} />}
        {this.props.detail && <Details {...quake} shareLink={shareLink} />}
        {!this.props.detail && (
          <Button
            fullWidth
            to={`/quake/${quake.id}`}
            color="secondary"
            component={this.AdapterLink}
          >
            Read More
          </Button>
        )}
      </Card>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  libraries: ['visualization'],
})(Earthquake);

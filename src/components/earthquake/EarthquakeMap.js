import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import flag from '../../flag.png';

export default class EarthquakeMap extends Component {
  componentDidUpdate() {
    this.loadMap();
  }

  loadMap() {
    const { quake: { geometry, properties } } = this.props;
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: { lat: geometry.coordinates[1], lng: geometry.coordinates[0] },
        zoom: 7,
        gestureHandling: "cooperative",
        mapTypeId: 'roadmap',
      });
      this.map = new maps.Map(node, mapConfig);

      let mag;
      if (properties.mag < 5) { mag = 3; }
      if (properties.mag > 6) { mag = 10; }
      if (properties.mag === 5) { mag = 5; }

      const marker = new google.maps.Marker({
        position: {
          lat: geometry.coordinates[1],
          lng: geometry.coordinates[0],
        },
        map: this.map,
        title: properties.title,
        icon: { url: `${flag}` },
      });

      const infowindow = new google.maps.InfoWindow({
        content: `<h3>${properties.title}</h3>
        <h4>${(new Date(properties.time)).toDateString()}
        at depth of ${geometry.coordinates[2]} km</h4>
        <a href=${properties.url} target="_blank">More Info</a>`
      });
      marker.addListener('click', () => {
        infowindow.open(this.map, marker);
      });

      const heatmap = new google.maps.visualization.HeatmapLayer({
        data: [{
          location: new google.maps.LatLng(
            geometry.coordinates[1],
            geometry.coordinates[0],
          ),
          weight: mag,
        }],
        radius: 40,
      });
      heatmap.setMap(this.map);
    }
  }

  render() {
    return (
      <div className="mapView" ref="map">
        loading map...
      </div>
    );
  }
}

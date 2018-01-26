import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import flag from '../flag.png'


export default class EarthquakeMap extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google || prevProps.quake !== this.props.quake) {
      this.loadMap();
    }
  }

  loadMap() {
    const { quake } = this.props;
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0]},
        zoom: 10,
        gestureHandling: "cooperative",
        mapTypeId: 'roadmap'
      })
      this.map = new maps.Map(node, mapConfig);

      let mag
      if (quake.properties.mag < 5) { mag = 3 } else if (quake.properties.mag > 6) {mag = 10} else {mag = 5}

      const marker = new google.maps.Marker({
        position: {lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0]},
        map: this.map,
        title: quake.properties.title,
        icon: {
          url: `${ flag }`
        }
      });

      const infowindow = new google.maps.InfoWindow({
        content: `<h3>${quake.properties.title}</h3>
        <h4>${(new Date(quake.properties.time)).toDateString()}
        at depth of ${quake.geometry.coordinates[2]} km</h4>
        <a href=${quake.properties.url} target="_blank">More Info</a>`
      });
      marker.addListener('click', function() {
        infowindow.open(this.map, marker);
      });

      const heatmap = new google.maps.visualization.HeatmapLayer({
        data: [{
          location: new google.maps.LatLng(quake.geometry.coordinates[1], quake.geometry.coordinates[0]),
          weight: mag
        }],
        radius: 40
      });
      heatmap.setMap(this.map);
    }
  }

  render() {
    const style = {
      width: '60vw',
      height: '60vh'
    }

    return (
      <div className="mapView" ref="map">
        loading map...
      </div>
    )
  }
}

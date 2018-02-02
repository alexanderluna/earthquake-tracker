import React from 'react';
import { Component } from 'react';
import { findQuake } from '../services/earthquakes'
import Earthquake from './Earthquake'

export default class ShowEarthquake extends Component {
  constructor(props){
    super(props)
    this.state = {
      quake: {},
      loading: true
    }
  }

  componentDidMount() {
    findQuake(this.props.match.params.id)
    .then(json => this.setState({ quake: json, loading: false }));
  }

  render() {
    return(
      <div className="quake-list">
        { this.state.loading
          ? <h1>Loading...</h1>
          : <Earthquake quake={this.state.quake} detail={true} shareLink={this.props.location.pathname} />
        }
      </div>
    )
  }
}

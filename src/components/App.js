import React, { Component } from 'react';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import AppBar               from 'material-ui/AppBar';
import Home                 from './Home';
import ShowEarthquake       from './ShowEarthquake';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <AppBar
              title={ <Link to="/">Earthquaky</Link>}
              className="app-bar"
              showMenuIconButton={false}
            />
            <Route exact path="/" component={Home}/>
            <Route path="/quake/:id" component={ShowEarthquake}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Header from './partials/Header';
import ShowEarthquake from './earthquake/ShowEarthquake';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/quake/:id" component={ShowEarthquake} />
    </div>
  </BrowserRouter>
);

export default App;

# Earthquake Tracker Project

**Live version available at:** [https://earthquake-ticker.firebaseapp.com](https://earthquake-ticker.firebaseapp.com)

A react project that tracks earthquakes around the world using the [USGS GeoJSON API](https://earthquake.usgs.gov/fdsnws/event/1/). It allows you to search for earthquakes in your area and filter by magnitude and radius.


## Installation instructions

```bash
git clone git@github.com:Mycroft1891/earthquake-tracker.git
cd earthquake-tracker

yarn install
```
Please beware that for this project you will have to create a `.env` file at the root of the project with 1 environment variables for your own Google Maps API key:

- `REACT_APP_GOOGLE_KEY`

Once you have done that:

```bash
yarn start
```

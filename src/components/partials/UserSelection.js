import React from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';

const UserSelection = ({ radius, magnitude, handler }) => (
  <div className="select-area">
    <div className="select-field">
      <InputLabel htmlFor="radius-select">Radius</InputLabel>
      <Select
        autoWidth
        className="select-field"
        value={radius}
        onChange={handler}
        inputProps={{ name: 'radius', id: 'radius-select' }}
      >
        <MenuItem value={50}>50 KM</MenuItem>
        <MenuItem value={100}>100 KM</MenuItem>
        <MenuItem value={250}>250 KM</MenuItem>
        <MenuItem value={500}>500 KM</MenuItem>
        <MenuItem value={1000}>1000 KM</MenuItem>
        <MenuItem value={2000}>2000 KM</MenuItem>
        <MenuItem value={4000}>4000 KM</MenuItem>
      </Select>
    </div>

    <div className="select-field">
      <InputLabel htmlFor="magnitude-select">Magnitud</InputLabel>
      <Select
        autoWidth
        className="select-field"
        value={magnitude}
        onChange={handler}
        inputProps={{ name: 'magnitude', id: 'magnitude-select' }}
      >
        <MenuItem value={2}>mag 2+</MenuItem>
        <MenuItem value={3}>mag 3+</MenuItem>
        <MenuItem value={4}>mag 4+</MenuItem>
        <MenuItem value={5}>mag 5+</MenuItem>
        <MenuItem value={6}>mag 6+</MenuItem>
        <MenuItem value={7}>mag 7+</MenuItem>
      </Select>
    </div>
  </div>
);

export default UserSelection;

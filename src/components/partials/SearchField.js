import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Paper, InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

const SearchField = ({ defaultSearch, searchCity }) => {
  const classes = useStyles();
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="search-bar">
      <Paper className={classes.root}>
        <InputBase
          fullWidth
          className={classes.input}
          placeholder={defaultSearch}
          label="Search City"
          value={city || ''}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={() => searchCity(city)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchField;

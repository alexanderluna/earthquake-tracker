import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
  <AppBar className="app-bar">
    <Toolbar>
      <Typography variant="h5">
        <Link
          to="/"
          color="inherit"
          component={RouterLink}
        >
          Earthquaky
        </Link>
      </Typography>
    </Toolbar>
  </AppBar >
);

export default Header;

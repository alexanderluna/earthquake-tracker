import React from 'react';
import {
  Button, CardActions, Table, TableBody, TableCell, TableHead, TableRow, Paper,
} from '@material-ui/core';

const Details = ({ shareLink, properties }) => {
  const rows = [
    { name: 'Location', value: properties.place },
    { name: 'Magnitude', value: properties.mag },
    { name: 'Magnitude Type', value: properties.magType },
    { name: 'Largest azimuthal gap', value: properties.gap },
    { name: 'Maximum Estimated Instrumental Intensity', value: properties.mmi },
    { name: 'Alert', value: properties.alert },
    { name: 'Status', value: properties.status },
    { name: 'Tsunami', value: properties.tsunami },
    { name: 'Reviewd by Human ?', value: properties.type },
    { name: 'Event Significance', value: properties.sig },
    { name: 'Root-Mean-Square', value: properties.rms },
    { name: 'Total Seismig Stations used', value: properties.nst },
    { name: 'Sources', value: properties.sources },
  ];

  return (
    <div>
      <CardActions>
        <Button color="secondary" fullWidth>
          <a href={`https://twitter.com/intent/tweet?via=mr_moon95&text=Earthquake ${properties.title} but I am safe&url=https://earthquake-ticker.firebaseapp.com${shareLink}`}>Tweet I'm safe</a>
        </Button>
      </CardActions>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell>{row.value || 'information not available'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Details;

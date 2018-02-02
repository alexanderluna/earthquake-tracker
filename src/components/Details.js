import React from 'react';
import {CardActions, CardText} from 'material-ui/Card';
import RaisedButton            from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const Details = (props) => (
  <div>
    <CardActions>
      <RaisedButton
        label={<a href={`https://twitter.com/intent/tweet?via=mr_moon95&text=Earthquake ${props.quake.properties.title} but I am fine&url=https://earthquake-ticker.firebaseapp.com${props.shareLink}`}>Tweet I'm safe</a>}
        secondary={true}
        fullWidth={true} />
    </CardActions>
    <CardText>
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Property</TableHeaderColumn>
            <TableHeaderColumn>Value</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>Location</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.place || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Magnitude</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.mag || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Magnitude Type</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.magType || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Largest azimuthal gap</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.gap || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Maximum Estimated Instrumental Intensity</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.mmi || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Alert</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.alert || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Reviewed by Human ?</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.status || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Tsunami</TableRowColumn>
            <TableRowColumn>
              { props.quake.properties.tsunami == 0 ? "0" : "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Type of Event</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.type || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Event Significance</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.sig || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Root-Mean-Square (RMS)</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.rms || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Total Seismig Stations used</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.nst || "unpublished information"}
            </TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Sources</TableRowColumn>
            <TableRowColumn>
              {props.quake.properties.sources}
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </CardText>
  </div>
);

export default Details;

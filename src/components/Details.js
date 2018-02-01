import React from 'react';
import {CardActions, CardText} from 'material-ui/Card';
import RaisedButton            from 'material-ui/RaisedButton';


const Details = () => (
  <div>
    <CardText>
      This happened
    </CardText>
    <CardActions>
      <RaisedButton label="Tweet" secondary={true} fullWidth={true} />
    </CardActions>
  </div>
);

export default Details;

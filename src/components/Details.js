import React from 'react';
import {CardActions, CardText} from 'material-ui/Card';
import RaisedButton            from 'material-ui/RaisedButton';

const Details = (props) => (
  <div>
    <CardText>
      This happened
    </CardText>
    <CardActions>
      <RaisedButton
        label={<a href={`https://twitter.com/intent/tweet?via=mr_moon95&text=Earthquake ${props.quake.properties.title} but I am fine&url=https://earthquake-ticker.firebaseapp.com${props.shareLink}`}>Tweet I'm safe</a>}
        secondary={true}
        fullWidth={true} />
    </CardActions>
  </div>
);

export default Details;

import React          from 'react';
import { Component }  from 'react';
import SelectField    from 'material-ui/SelectField';
import MenuItem       from 'material-ui/MenuItem';

export default class UserSelection extends Component {
  render() {
    const { radius, magnitude, handler } = this.props;
    return(
      <div>
        <SelectField
          className="select-field"
          floatingLabelText="Radius"
          value={radius}
          onChange={this.props.handler}
          autoWidth={true}
        >
          <MenuItem value={50} primaryText="50 KM" />
          <MenuItem value={100} primaryText="100 KM" />
          <MenuItem value={250} primaryText="250 KM" />
          <MenuItem value={500} primaryText="500 KM" />
          <MenuItem value={1000} primaryText="1000 KM" />
          <MenuItem value={2000} primaryText="2000 KM" />
          <MenuItem value={4000} primaryText="4000 KM" />
        </SelectField>

        <SelectField
          className="select-field"
          floatingLabelText="Magnitude"
          value={magnitude}
          onChange={this.props.handler}
          autoWidth={true}
        >
          <MenuItem value={2} primaryText="mag 2+" />
          <MenuItem value={3} primaryText="mag 3+" />
          <MenuItem value={4} primaryText="mag 4+" />
          <MenuItem value={5} primaryText="mag 5+" />
          <MenuItem value={6} primaryText="mag 6+" />
          <MenuItem value={7} primaryText="mag 7+" />
        </SelectField>
      </div>
    )
  }
}

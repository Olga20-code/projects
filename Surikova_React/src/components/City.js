import React from "react";

class City extends React.Component {
  render() {
    return <option value={this.props.name}>{this.props.name}</option>
  }
}

export default City;
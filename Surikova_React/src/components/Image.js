import React from "react";

class Image extends React.Component {
  render() {
    return(
      <div>
        <img src={this.props.src} title={this.props.title} alt={this.props.title} />
      </div>
    )
  }
}

export default Image;
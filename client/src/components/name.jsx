import React, { Component } from "react";
import PropTypes from "prop-types";

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    return (
      <span className="nameview">
        <ul>{this.props.name}</ul>
      </span>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};
 
export default Name;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css';

class ListItem extends Component {
  render () {
    const { displayName }
    return (
      <li>
        { displayName }
      </li>
    )
  }
}

List.propTypes = {
  displayName: PropTypes.string
}

export default ListItem
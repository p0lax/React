import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css';

class ListItem extends Component {
  render () {
    const { index, displayName } = this.props;
    return (
      <li>
        { `${displayName} ${index + 1}` }
      </li>
    );
  }
}

ListItem.propTypes = {
  displayName: PropTypes.string
};

export default ListItem;
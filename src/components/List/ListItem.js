import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render () {
    const { index, title } = this.props;
    return (
      <li>
        { `${title} ${index + 1}` }
      </li>
    );
  }
}

ListItem.propTypes = {
  displayName: PropTypes.string
};

export default ListItem;
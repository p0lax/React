import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListTitle extends Component {
  render () {
    const { expanded, title } = this.props;
    const stateMarker = expanded ? '-' : '+';
    return (
      <div className="list-title-block">
        <span className="list-title-marker">{stateMarker}</span>
        <h3 className="list-title-text" onClick={this.props.onExpand}>{title}</h3>
      </div>
    )
  }
}

ListTitle.propTypes = {
  expanded: PropTypes.bool.isRequired,
  title: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired
};

export default ListTitle;

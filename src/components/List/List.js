import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './List.css';

class List extends Component {
  render () {
    const { title, items } = this.props;

    return (
      <section>
        <h3>{title}</h3>
        <ul>
          { items.length > 0 && items.map(item => <ListItem {...item} />) }
        </ul>
      </section>
    )
  }
}

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

export default List
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import './List.css';

class List extends Component {

  renderListItem = (item, index) => {
    return (
      <ListItem 
        {...item}
        key={index}
        index={index} 
      />
    );
  }

  render () {
    const { title, items } = this.props;

    return (
      <section className="list">
        { title && <h3 className="list-title">{title}</h3> }
        <ul>
          { items.length > 0 && items.map(this.renderListItem) }
        </ul>
      </section>
    )
  }
}

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

export default List;
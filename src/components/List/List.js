import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import ListTitle from './ListTitle';
import './List.css';

class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  expand = () => {
    this.setState({ expanded: !this.state.expanded });
  }

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
    const { expanded } = this.state;
    
    return (
      <section className="list">
        <ListTitle expanded={expanded} title={title} onExpand={this.expand} />
        {
          expanded ? 
            <ul>
              { 
                items.length > 0 ? 
                  items.map(this.renderListItem) : 
                  <div>There are no itmes in this list!</div>
              }
            </ul> :
            null
        }
      </section>
    )
  }
}

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

export default List;
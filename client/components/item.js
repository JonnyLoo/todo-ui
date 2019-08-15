import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './form/button';

export class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = new Date(this.props.item.dueBy),
     dateString = `${ date.getUTCMonth() + 1 }/${ date.getUTCDate() }/${ date.getUTCFullYear() }`
    return (
      <div className='item-row'>
        <div className='item-name'>{ this.props.item.name }</div>
        <div className='item-due'>{ dateString }</div>
        <Button
          label={ 'delete' }
          customOnClick={ this.props.deleteItem.bind(this, this.props.item._id) }
        />
        <Button
          label={ 'view' }
          customOnClick={ this.props.selectItem.bind(this, this.props.item) }
        />
      </div>
    );
  }
}

Item.propTypes = {
  deleteItem: PropTypes.func,
  item: PropTypes.object,
  selectItem: PropTypes.func
}

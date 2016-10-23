import React, { Component } from 'react';
import './tab.css';

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='tab-item'>
        {this.props.text}
      </div>
    )
  }
}

export default Tab;

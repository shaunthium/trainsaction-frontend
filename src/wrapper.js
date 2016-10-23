import React, { Component } from 'react';
import Tab from './input/tab';

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='tabs'>
          <Tab text='Recommendations'/>
          <Tab text='Marketplace'/>
        </div>
      </div>
    );
  }
}

export default Wrapper;

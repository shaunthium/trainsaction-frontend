import React, { Component } from 'react';
import Tab from './input/tab';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  setActiveTab(tab) {
    console.log('tab', tab);
    this.setState({activeTab: tab});
  }

  render() {
    return (
      <div>
        <div className='tabs'>
          <Tab
            text='Recommendations'
            active={this.state.activeTab === 0}
            onClick={this.setActiveTab.bind(this, 0)}
            />
          <Tab
            text='Marketplace'
            active={this.state.activeTab === 1}
            onClick={this.setActiveTab.bind(this, 1)}
            />
        </div>
      </div>
    );
  }
}

export default Wrapper;

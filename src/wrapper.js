import React, { Component } from 'react';
import Tab from './input/tab';
import ContentWrapper from './content/wrapper';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  setActiveTab(tab) {
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
        <ContentWrapper tab={this.state.activeTab} />
      </div>
    );
  }
}

export default Wrapper;

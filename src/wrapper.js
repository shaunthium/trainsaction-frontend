import React, { Component } from 'react';
import Tab from './input/tab';
import ContentWrapper from './content/wrapper';
import './wrapper.css';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
  }

  setActiveTab(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    return (
      <div>
        <h5>trAInsactions</h5>
        <div className='container'>
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
      </div>
    );
  }
}

export default Wrapper;

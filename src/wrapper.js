import React, { Component } from 'react';
import Tab from './input/tab';
import ContentWrapper from './content/wrapper';
import './wrapper.css';
import logo_train from './logo-train.jpg';
import logo_words from './logo-words.jpg';

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
      <div className='wrapper'>
        <div
          style={{
            backgroundColor: '#6E6E6E',
            height: '4em',
            textAlign: 'center'
          }}>
          <img src={logo_train} className='logo-img'/>
          <img src={logo_words} className='logo-img'/>
        </div>
        <div className='container' style={{paddingTop: '1em'}}>
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
        <h3 style={{color: '#35a6e5', textAlign: "center"}}>Load More</h3>
      </div>
    );
  }
}

export default Wrapper;

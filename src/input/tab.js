import React, { Component } from 'react';
import './tab.css';
import classNames from 'classnames';

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let className = classNames('tab-item', {'active': this.props.active})
    return (
      <div className={className} onClick={this.props.onClick}>
        {this.props.text}
      </div>
    )
  }
}

export default Tab;

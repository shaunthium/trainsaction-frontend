import React, { Component } from 'react';

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['window', 'mirror', 'phone stand']
    };
  }

  render() {
    return (
      <div>
        {
          this.state.items.map((item) => {
            return <p>{item}</p>;
          })
        }
      </div>
    );
  }
}

export default Recommendations;

import React, { Component } from 'react';
import './marketplaces.css';
import pic_0 from './img/0.jpg';
import pic_1 from './img/1.jpg';
import pic_2 from './img/2.jpg';
import pic_3 from './img/3.jpg';
import pic_4 from './img/4.jpg';
import pic_5 from './img/5.jpg';

class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketplaces: [
        {
          id: 0,
          visits: '770.3'
        },
        {
          id: 1,
          visits: '298.5'
        },
        {
          id: 2,
          visits: '37.7'
        },
        {
          id: 3,
          visits: '173.1'
        },
        {
          id: 4,
          visits: '89.8'
        },
        {
          id: 5,
          visits: '77.6'
        }
      ]
    };
  }

  _getImgSrc(id) {
    switch(id) {
      case 0:
        return pic_0;
      case 1:
        return pic_1;
      case 2:
        return pic_2;
      case 3:
        return pic_3;
      case 4:
        return pic_4;
      case 5:
        return pic_5;
    }
  }

  render() {
    let pairs = [];
    for (let i=0; i<this.state.marketplaces.length; i+=2) {
      pairs.push(this.state.marketplaces.slice(i, i+2))
    }
    return (
      <div className='marketplaces'>
        {
          pairs.map((pair, index) => {
            return (
              <div className='outer-container' key={index}>
                <div className='inner-container'>
                  <div className='marketplace' style={{marginLeft: '1em'}}>
                    <img height={120} className='marketplace-img' src={this._getImgSrc(pair[0].id)} />
                    <p style={{fontFamily: 'Avenir-Heavy'}}>{pair[0].visits}M</p> monthly visits
                  </div>
                  <div className='marketplace' style={{position: 'absolute', top: '0'}}>
                    <img height={120} className='marketplace-img' src={this._getImgSrc(pair[1].id)} />
                    <p style={{fontFamily: 'Avenir-Heavy'}}>{pair[1].visits}M</p> monthly visits
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Marketplace;

import React, { Component } from 'react';
import './recommendations.css';
import pic_0 from './img/0.jpg';
import pic_1 from './img/1.jpg';
import pic_2 from './img/2.jpg';
import pic_3 from './img/3.jpg';
import pic_4 from './img/4.jpg';
import shopping_cart from './img/shopping-cart.png';

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'Car Charger',
          desc: 'Charge your smart phone on the go. Free delivery.',
          price: '1.75'
        },
        {
          name: '150,000 mile checkup',
          desc: 'Service your car at a nearby mechanic. 5-stars on Yelp.',
          price: '86.50'
        },
        {
          name: 'OEM Windshield',
          desc: 'Brand new on eBay. 51 sold so far from trusted seller.',
          price: '129.00'
        },
        {
          name: 'Car Smartphone Mount',
          desc: 'Worth $29.99 (80% discount) on Groupon. Over 10,000 bought.',
          price: '5.99'
        },
        {
          name: 'Steering Wheel Cover',
          desc: 'Easy assembly, no tools required. 9 customer reviews on Amazon.',
          price: '14.99'
        }
      ]
    };
  }

  _getImgSrc(index) {
    switch(index) {
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
    }
  }

  render() {
    return (
      <div className='recommendations'>
        {
          this.state.items.map((item, index) => {
            return (
              <div className='outer-container' key={index}>
                <div className='inner-container'>
                  <div style={{
                    display: 'inline-block',
                    width: '23%'
                  }}>
                    <div>
                      <img
                        src={this._getImgSrc(index)}
                        alt={"image_"+index}
                        style={{
                          height: '6em',
                          width: '100%'
                        }}/>
                    </div>
                    <div style={{backgroundColor: 'grey'}}>${item.price}</div>
                  </div>
                  <div style={{
                    display: 'inline-block',
                    width: '50%',
                    position: 'relative',
                    bottom: '1em',
                    marginLeft: '0.5em'
                  }}>
                    <p>{item.name}</p>
                    <p style={{marginTop: '0.5em'}}>{item.desc}</p>
                  </div>
                  <div style={{display: 'inline-block', width: '15%'}}>
                    <img
                      style={{
                        width: '100%',
                        position: 'relative',
                        bottom: '2em',
                        left: '1em'
                      }}
                      src={shopping_cart} />
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Recommendations;

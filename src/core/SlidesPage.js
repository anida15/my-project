import React, { Component } from "react";
import Slider from "react-slick";
import pic from "./pi1.png"


export default class AutoPlayMethods extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="slideposition">
            
          <img className="slideposition" src={pic} alt=".." />

          </div>
          <div>
          <img className="slideposition" src={pic} alt=".." />
          </div>
          <div>
          <img className="slideposition" src={pic} alt=".." />
          </div>
          <div>
          <img className="slideposition" src={pic} alt=".." />
          </div>
          <div>
          <img className="slideposition" src={pic} alt=".." />
          </div>
          <div>
          <img className="slideposition" src={pic} alt=".." />
          </div>
        </Slider>
         
       
      </div>
    );
  }
}
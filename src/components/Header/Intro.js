import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class Intro extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      customPaging: i => (
        <div
          style={{
            width: "20px",
            color: "black",
            textAlign: "center"
          }}
        >
          {i + 1}
        </div>
      )
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={hero1} alt=""/>
        </div>
        <div>
          <img src={hero2} alt=""/>
        </div>
        <div>
          <img src={hero3} alt=""/>
        </div>
      </Slider>
    );
  }
}
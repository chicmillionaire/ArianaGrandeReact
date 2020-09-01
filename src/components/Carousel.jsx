import React from "react";
import Slider from "react-slick";
import "../styles/Carousel.css";

import "../resources/images/slide_one.jpg";
import "../resources/images/slide_two.jpg";
import "../resources/images/slide_three.jpg";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `${window.innerHeight}px`
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url("../resources/images/slide_one.jpg")`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url("../resources/images/slide_two.jpg")`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url("../resources/images/slide_three.jpg")`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-scroll
    autoplaySpeed: 3000, // Auto-scroll speed
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }} className="shadow-xl">
      <Slider {...settings}>
        <div>
          <img
            src={require("../../assets/Img 1.jpg")}
            alt="Slide 1"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={require("../../assets/Img 2.jpg")}
            alt="Slide 2"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={require("../../assets/Img 3.jpg")}
            alt="Slide 3"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={require("../../assets/Img 6.jpg")}
            alt="Slide 3"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={require("../../assets/Img 5.jpg")}
            alt="Slide 3"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={require("../../assets/Img 4.jpg")}
            alt="Slide 3"
            style={{ width: "100%" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;

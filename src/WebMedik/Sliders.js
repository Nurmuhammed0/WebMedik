import React from 'react'
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import products from './Products';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

 function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    backgroundColor:"blue",
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };
  return (
    <div className='sliders1'>
      <Slider {...settings}>
        {products.cards2.map((s) => (
          <Card className='slider-card' as={Link} to={`/large/${s.id}`}>
          <div className='slider2'>
            <div className='slider3'>
              <Image className='slid-img' src={s.img2}/>
              <h2 className='sliderh2'>{s.title2}</h2>
              </div>
            <div className='slider4'>
              {/* <h3 style={{textAlign:'center'}}>{s.text2}</h3> */}
              <p>{s.button2}</p>
            </div>
          </div>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;

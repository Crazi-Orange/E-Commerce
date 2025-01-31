import React from 'react';
import Slider from 'react-slick';
import HeroSection from './HeroSection';
import Marketing from './Marketing';
import Marketing_2 from './Marketing_2';
import Marketing_3 from './Marketing_3';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings} className="h-full">
        {/* HeroSection */}
        <div className="h-full">
          <HeroSection />
        </div>

        {/* Marketing_3 */}
        <div className="h-full">
          <Marketing_3 />
        </div>

        {/* Marketing_2 */}
        <div className="h-full">
          <Marketing_2 />
        </div>

        {/* Marketing */}
        <div className="h-full">
          <Marketing />
        </div>
      </Slider>

      {/* Custom Styles for Slider Arrows */}
      <style jsx>{`
        .slick-prev,
        .slick-next {
          z-index: 50;
          width: 50px;
          height: 50px;
        }
        .slick-prev {
          left: 10px;
        }
        .slick-next {
          right: 10px;
        }
        .slick-prev::before,
        .slick-next::before {
          color: #4b5563; /* gray-600 */
          font-size: 30px;
        }
        .slick-dots {
          bottom: 10px; /* Decrease this value to move dots closer to the slider */
        }
      `}</style>
    </div>
  );
};

export default CustomSlider;
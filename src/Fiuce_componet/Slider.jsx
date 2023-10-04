import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './App.css';


const Slider = () => {
  return (
    <div>
      <OwlCarousel items={1} responsive={
        {
          dots:true
        }
      } loop>
        <div className="item">
          <div className='' >
            <a href="#">
              <img src={require('./image/15.jpeg')} alt="" className='w-100 img1 ' />
            </a>
          </div>

          <div className='box_content'>
            <div>
              <h3 className='title-small mb-0'>Style Destination</h3>
            </div>
            <div>
              <h3 className='titlebig mb-0'>Clean Fresh Fruit</h3>
            </div>
            <div>
              <h3 className='title-small_p mb-0'>From planter materials to style options, discover which <br /> planter is best for your space.</h3>
            </div>
            <div>
              <a href="#" className='button'>SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className=''>
            <a href="#">
              <img src={require('./image/asset 17.jpeg')} alt="" className='w-100 img1  '  />
            </a>
          </div>
          <div className='box_content'>
            <div>
              <h3 className='title-small text-black mb-0'>Style Destination</h3>
            </div>
            <div>
              <h3 className='titlebig text-black mb-0'>Smoothie delicious</h3>
            </div>
            <div>
              <h3 className='title-small_p text-black mb-0'>From planter materials to style options, discover which <br /> planter is best for your space.</h3>
            </div>
            <div>
              <a href="#" className='button1 '>SHOP NOW</a>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Slider;

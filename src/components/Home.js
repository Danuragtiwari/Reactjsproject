import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {MdPlayArrow} from "react-icons/md";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

// import logo192 from "../public/logo192";
// import Image2 from "../assets/image2.svg";
// import Image3 from "../assets/image3.svg";

const Home = () => {
  return (


    <div className='home'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slide'>
            <div className='slide-info'>
              <div className='slide-content'> 
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a>Know more<MdPlayArrow /></a>
              </div>
            </div>
            <div className='image'>
              <img src='logo192.png' alt='pogo'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <div className='slide-info'>
              <div className='slide-content'> 
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a>Know more<MdPlayArrow /></a>
              </div>
            </div>
            <div className='image'>
              <img src='logo192.png' alt='pogo'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <div className='slide-info'>
              <div className='slide-content'> 
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a>Know more<MdPlayArrow /></a>
              </div>
            </div>
            <div className='image'>
              <img src='logo192.png' alt='pogo'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <div className='slide-info'>
              <div className='slide-content'> 
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a>Know more<MdPlayArrow /></a>
              </div>
            </div>
            <div className='image'>
              <img src='logo192.png' alt='pogo'/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default Home
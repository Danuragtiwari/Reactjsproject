import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Cards = () => {
  return (
    <>    
      
    <div className='time-table'>
    <div className='upcoming-exam'>
    <h4>Upcoming Examinations</h4>
      <p>Lorem ipsum </p>
    </div>

    
    <div className='upcoming-exam'>
    <h4>02th october 2014</h4>
      <p>Level 1</p>
    </div>
    <div className='upcoming-exam'>
    <h4>Nov-Dec 2024</h4>
      <p>Lovel 2</p>
    </div>
    <div className='upcoming-exam'>
    <h4>ongoning this year</h4>
      <p>Level 3 (Grad)</p>
    </div>
   </div>
    <div className='cards' >
        <Swiper
        slidesPerView={3.5}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
              <p>Lorem Ipsum</p>
              <p>Leo duis ut diam quam nulla porttitor. Turpis egestas pretium aenean pharetra magna.</p>
              <p>Know more</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Cards
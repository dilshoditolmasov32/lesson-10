import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../../assets/carousel1.jpg"
import img2 from "../../assets/carousel2.jpg"
import img3 from "../../assets/carousel3.jpg"
import vid from "../../assets/v.mp4"

import { Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='banner'>
    <Swiper 
        loop={true} 
        navigation={true} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="banner__swiper">
        <SwiperSlide className='banner__item'>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='banner__item'>
            <img src={img2} alt="" />
            <div className="banner__content">
                <h2></h2>
                <p></p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='banner__item'>
            <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='banner__item'>
            <video src={vid} muted autoPlay></video>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
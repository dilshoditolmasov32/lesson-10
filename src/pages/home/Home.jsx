import React, { useState, useEffect, useRef } from "react";
import axios from "../../api";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products?limit=4&skip=${count * 4}`)
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res.data))
      .finally(() => setLoading(false));
  }, [count]);

  return (
    <div className="home">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <Products loading={loading} data={data} />
      <div className="container">
        <button onClick={() => setCount((p) => p + 1)} className="btn-button">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;

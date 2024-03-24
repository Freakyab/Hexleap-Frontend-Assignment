"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
// import Image from "next/image";
import Ticket from "./../Card/Ticket";
import ticketContent from "../DataStore/ticketDetails";

function Slider() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      rewind={true}
      spaceBetween={-100}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1285: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}>
      {ticketContent.map((item) => (
        <SwiperSlide key={item.id}>
          <Ticket
            img={item.img}
            title={item.title}
            date={item.date}
            day={item.day}
            time={item.time}
            venue={item.venue}
            button={item.button}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Slider;

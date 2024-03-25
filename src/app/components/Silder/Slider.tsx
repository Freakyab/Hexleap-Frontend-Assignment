"use client";
import React from "react";

// import Swiper for loading data in carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Ticket from "./../Card/Ticket";
import ticketContent from "../DataStore/ticketDetails";

function Slider() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      rewind={true}
      spaceBetween={-100}
      // Responsive
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

      {/* Load content as per the data length*/}
      {ticketContent.map((item) => (
        <SwiperSlide key={item.id}>
          <Ticket
            img={item.img}
            title={item.title}
            date={item.date}
            day={item.day}
            time={item.time}
            venue={item.venue}
            buttonDetail={item.button}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Slider;

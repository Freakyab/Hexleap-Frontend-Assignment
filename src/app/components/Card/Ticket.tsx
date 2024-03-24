import React from "react";
import Image from "next/image";

type TicketProps = {
  img: string;
  title: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  button: string;
};

function Ticket({ img, title, date, day, time, venue, button }: TicketProps) {
  return (
    <div className="w-full flex justify-center pb-10 ">
      <div className="flex flex-col justify-center items-center w-[200px] sm:w-[264px] h-fit dark:bg-dark-card-bg bg-light-card-bg shadow-xl ">
        <div className="w-[210px] sm:w-[260px] pt-2 ">
          <Image
            src={img}
            alt="slider"
            width={500}
            height={500}
            className="object-contain drop-shadow-xl"
          />
        </div>
        <div>
          <div className="median dark:bg-dark-radial bg-light-radial -translate-y-2">
            <div className="block dark:bg-dark-dashed opacity-50 bg-light-dashed"></div>
            {/* <div className="border-[1px] translate-y-2 border-dashed  w-[80%] translate-x-5 text-center"></div> */}
          </div>
          <div className="px-4 -translate-y-6 flex flex-col justify-center items-center gap-2  pt-4">
            <p className="font-semibold tracking-wider text-lg"
              style = {{fontFamily: 'Poppins, sans-serif'}}
            >{title}</p>
            <p className="text-sm  font-thin uppercase"
            style = {{fontFamily: 'Poppins, sans-serif'}}
            >
              <span className="font-normal px-1">{date}</span>|
              <span className="font-normal px-1">{day}</span>|
              <span className="font-normal px-1">{time}</span>
            </p>
            <p className="w-full font-extralight text-center">{venue}</p>
            <button className="w-full mt-2 p-2 dark:bg-dark-btn bg-light-btn capitalize text-dark-text">
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;

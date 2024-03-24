import React from "react";
import Image from "next/image";

interface SportsCardProps {
  img: string;
  title: string;
  totalEvents: string;
  sport: string;
}

const SportsCard = ({ img, title, totalEvents, sport }: SportsCardProps) => {
  return (
    <div className="h-full w-fit bg-light-card-bg dark:bg-dark-card-bg py-3 flex flex-col items-center shadow-lg">
      <div className="w-[250px] h-full  flex justify-center items-center px-2">
        <Image
          src={img}
          alt="card"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="w-full p-3 flex ">
        <p className="font-medium text-lg capitalize tracking-wide">{title}</p>
      </div>
      <div className="bg-light-card-detail rounded-sm gap-2 dark:bg-dark-card-detail tracking-wider w-[90%] flex justify-between px-3 py-2 text-nowrap capitalize h-full">
        <div className="gap-2 flex flex-col">
          <span className="text-xs  dark:text-dark-card-text text-light-card-text ">
            total events
          </span>
          <span className="font-medium text-sm">{totalEvents}</span>
        </div>
        <div className="flex gap-2 flex-col pr-4">
        <span className="text-xs  dark:text-dark-card-text text-light-card-text ">
            sport
          </span>
          <span className="font-medium text-sm">{sport}</span>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;

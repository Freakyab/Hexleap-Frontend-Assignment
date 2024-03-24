import React from "react";
import Image from "next/image";
function AdCard() {
  return (
    <div className="h-[560px] w-[250px] bg-light-bg dark:bg-dark-card-bg py-3 flex flex-col items-center shadow-2xl">
      <div className="w-[250px] relative h-fit justify-between flex items-center px-2 ">
        <Image
          src="/assets/cards/Ad.png"
          alt="card"
          width={500}
          height={500}
          className="object-contain "
        />
        <div className="absolute bg-dark-btn text-dark-text w-fit px-4 top-0 right-2">
          <p>Ad</p>
        </div>
      </div>
      <div className="w-[93%] h-96 line-clamp-6 items-center p-4 border-light-green border-[1px] dark:border-none">
        <p className="font-semibold text-xl capitalize">Advertisement Title</p>
        <p className="font-thin text-sm  py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
export default AdCard;

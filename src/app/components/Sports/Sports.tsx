import React from "react";
import SportsCard from "../Card/SportsCard";
import AdCard from "../Card/AdCard";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import content from "../DataStore/cardDetails";

const Sports = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex py-10 flex-col h-full justify-start w-full">
      <div className="flex justify-between items-center pb-10 px-5">
        <h1 className="font-bold text-center text-2xl sm:w-[15%] underline underline-offset-8 decoration-underline-color ">
          Sports
        </h1>
        <button
          className="w-10 h-10 pt-1"
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <FaMoon className="rounded-full w-full h-full  text-btn" />
          ) : (
            <FaSun className="rounded-full w-full h-full " />
          )}
        </button>
      </div>
      <div className="flex gap-5  flex-wrap justify-center items-center">
        {content.map((card) => (
          <SportsCard
            key={card.id}
            img={card.img}
            title={card.title}
            totalEvents={card.totalEvents}
            sport={card.sport}
          />
        ))}
       
        <AdCard />
      </div>
      <div className="flex w-full justify-center">
        <button className="w-[130px] h-[50px] text-dark-text bg-btn font-bold text-lg mt-10 rounded-md">
          See More
        </button>
      </div>
    </div>
  );
};

export default Sports;

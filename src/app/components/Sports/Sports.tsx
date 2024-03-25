import React from "react";

// Importing the icons
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

// Import the components
import AdCard from "../Card/AdCard";
import content from "../DataStore/cardDetails";
import SportsCard from "../Card/SportsCard";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Type for the props
type SportsComponentProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sports = ({ darkMode, setDarkMode }: SportsComponentProps) => {
  // Function to notify the user
  const notify = () =>
    toast.info("Coming soon", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <div className="flex py-10 flex-col h-full justify-start w-full">
      <div className="flex justify-between items-center pb-10 px-5">
        <h1 className="font-bold text-center text-2xl sm:w-[15%] underline underline-offset-8 decoration-underline-color ">
          Sports
        </h1>

        {/* Onclick change the theme */}
        <button className="w-7 h-7 pt-3" onClick={() => setDarkMode(!darkMode)}>
          {/* Icon logic as per the theme */}
          {darkMode ? (
            <FaMoon className="rounded-full w-full h-full  text-btn" />
          ) : (
            <FaSun className="rounded-full w-full h-full " />
          )}
        </button>
      </div>
      <div className="flex gap-5  flex-wrap justify-center items-center">
        {/* Load the cards with the details */}
        {content.map((card) => (
          <SportsCard
            key={card.id}
            img={card.img}
            title={card.title}
            totalEvents={card.totalEvents}
            sport={card.sport}
          />
        ))}

        {/* Advertising Component */}
        <AdCard />
      </div>
      <div className="flex w-full justify-center">
        {/* Load more button */}
        <button
          className="w-[130px] h-[50px] text-dark-text bg-btn font-bold text-lg mt-10 rounded-md"
          onClick={notify}>
          See More
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sports;

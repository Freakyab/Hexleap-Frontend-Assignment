"use client";
// Importing the components
import Slider from "./components/Silder/Slider";
import Sports from "./components/Sports/Sports";
import Title from "./components/Title/title";

// Importing the useState hook
import { useState } from "react";


export default function Home() {

  // Using the useState hook to create a darkMode state
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={`flex flex-col  justify-center min-h-screen h-full items-center ${
        darkMode ? "dark" : ""
      } `}>
      <div className="bg-light-bg dark:text-dark-text text-light-text flex-col dark:bg-dark-bg w-full min-h-screen h-full pb-10 flex justify-center items-center">

        {/* Render Sport component */}
        <Sports darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col w-full sm:w-[90%] m-5 p-4 pt-10 gap-3 h-full justify-center items-center bg-gradient-to-b dark:from-linear-color from-light-linear-color dark:to-linear-color-2 to-light-linear-color-2">
          
          {/* Collection Sports details */}
          <Title />
          <div className="w-full ">

            {/* Slider containing the tickets(cards) */}
            <Slider />
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import Slider from "./components/Silder/Slider";
import Sports from "./components/Sports/Sports";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={`flex flex-col  justify-center min-h-screen h-full items-center ${darkMode ? 'dark' : ''} `}>
      <div className="bg-light-bg dark:text-dark-text text-light-text flex-col dark:bg-dark-bg w-full min-h-screen h-full pb-10 flex justify-center items-center">
        <Sports 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className="flex flex-col w-full sm:w-[90%] m-5 p-4 pt-10 gap-3 h-full justify-center items-center bg-gradient-to-b dark:from-linear-color from-light-linear-color dark:to-linear-color-2 to-light-linear-color-2">
          <h1 className="text-5xl text-center font-bold">Collection Spotlight</h1>
          <p className="w-[80%] text-center py-4">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
          <div className="w-full ">
            <Slider />
          </div>
        </div> 
      </div>
    </main>
  );
}

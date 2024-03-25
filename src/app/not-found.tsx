"use client";
import React from "react";
import { useRouter } from "next/navigation";

function notFound() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className=" text-dark-text  flex-col bg-dark-bg w-full min-h-screen h-full pb-10 flex justify-center items-center">
      <h1 className="text-5xl text-center font-bold underline underline-offset-8 decoration-underline-color p-5">
        You Came at Wrong{" "}
      </h1>
      <img
        src={"https://media1.tenor.com/m/swTDQJ85dDEAAAAC/aaaa.gif"}
        alt="image"
        height={500}
        width={500}
        className="rounded-md"
      />
      <button
        onClick={handleClick}
        className="w-fit p-5 h-full text-dark-text bg-btn font-bold text-lg mt-10 rounded-md">
        Let me take you to Page {">>"}
      </button>
    </div>
  );
}

export default notFound;

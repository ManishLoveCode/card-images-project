import React, { useState } from "react";
import arrData from "./Api";

function Card() {
  return (
    <>
      {arrData.map((curEle) => (
        <div key={curEle.id} className="rounded-xl mx-auto p-4 border-2 bg-cyan shadow-lg shadow-cyan-500/50 sm:max-w-56 w-full">
          <img className="rounded w-62" src={curEle.img} alt="images" />
          <h2 className="text-pink-600 font-bold mt-2">Natural image</h2>
          <p>
            This is an awesome image so hit the download image button and download
          </p>
          <button className="bg-blue-400 p-2 rounded-xl text-white font-semibold mt-4 mx-auto grid">
            Download image
          </button>
        </div>
      ))}
    </>
  );
}

export default Card;

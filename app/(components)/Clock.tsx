"use client";

import Head from "next/head";
import React, { useState } from "react";
import {
  changeHour,
  changeMinute,
  changeSecond,
  toggleAMPM,
  convertTo24HourFormat,
} from "../utils/clockUtils";

const Clock: React.FC = () => {
  // State for hours, minutes, seconds, and AM/PM
  const [hour12, setHour12] = useState(12);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isAM, setIsAM] = useState(true);

  const hour24 = convertTo24HourFormat(hour12, isAM);

  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300,400,500,600,700&family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex space-x-16">
        {/* 12-hour clock */}
        <div>
          <h2 className="text-textColour text-4xl mb-2 ml-14 font-clockDesc">12-HOUR</h2>
          <div className="text-clockDigit12 text-6xl font-digitalClock">
            <span>{hour12.toString().padStart(2, "0")}</span>:
            <span>{minute.toString().padStart(2, "0")}</span>:
            <span>{second.toString().padStart(2, "0")}</span>
            <span className="text-textColour text-sm ml-2 cursor-pointer" onClick={() => toggleAMPM(setIsAM)}>
              {isAM ? "AM" : "PM"}
            </span>
          </div>
        </div>

        {/* 24-hour clock */}
        <div>
          <h2 className="text-textColour text-4xl mb-2 ml-16 font-clockDesc">24-HOUR</h2>
          <div className="text-clockDigit24 text-6xl font-digitalClock">
            <span>{hour24.toString().padStart(2, "0")}</span>:
            <span>{minute.toString().padStart(2, "0")}</span>:
            <span>{second.toString().padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;

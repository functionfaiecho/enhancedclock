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
import ArrowUp from "../assets/ArrowUp.svg";
import ArrowDown from "../assets/ArrowDown.svg";

// Helper component for rendering time controls for hours, minutes, and seconds.
// Just makes it easier to reuse the same pattern for all of them.
const TimeControl: React.FC<{
  value: number; // The current value (hour, minute, or second)
  onIncrement: () => void; // What happens when user clicks up
  onDecrement: () => void; // What happens when user clicks down
}> = ({ value, onIncrement, onDecrement }) => (
  <div className="flex flex-col items-center">
    {/* Arrow for increasing the value */}
    <ArrowUp onClick={onIncrement} className="cursor-pointer" />
    {/* Show the value as two digits, even if it's less than 10 */}
    <span>{value.toString().padStart(2, "0")}</span>
    {/* Arrow for decreasing the value */}
    <ArrowDown onClick={onDecrement} className="cursor-pointer" />
  </div>
);

// Main clock component that handles both 12-hour and 24-hour formats
const Clock: React.FC = () => {
  // State for the 12-hour clock values
  const [hour12, setHour12] = useState(12); // default to 12 o'clock
  const [minute, setMinute] = useState(0); // default to 0 minutes
  const [second, setSecond] = useState(0); // default to 0 seconds
  const [isAM, setIsAM] = useState(true); // default to AM

  // Convert the 12-hour format to 24-hour format for display
  const hour24 = convertTo24HourFormat(hour12, isAM);

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Head tag to manage fonts and other head elements */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300,400,500,600,700&family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      {/* Wrapper for the clock components */}
      <div className="flex space-x-16">
        
        {/* 12-hour clock section */}
        <div>
          {/* Title for the 12-hour clock */}
          <h2 className="text-textColour text-4xl mb-2 font-clockDesc text-center">
            12-HOUR
          </h2>
          {/* Clock display for 12-hour format */}
          <div className="flex text-clockDigit12 text-6xl font-digitalClock justify-center items-center space-x-4">
            {/* Hour control - user can click up or down to change hours */}
            <TimeControl
              value={hour12}
              onIncrement={() => changeHour(true, hour12, setHour12)} // Increase hour
              onDecrement={() => changeHour(false, hour12, setHour12)} // Decrease hour
            />

            {/* Colon separator between hours and minutes */}
            <div className="flex flex-col items-center justify-center">
              <span>:</span>
            </div>

            {/* Minute control - user can click up or down to change minutes */}
            <TimeControl
              value={minute}
              onIncrement={() => changeMinute(true, minute, setMinute, setHour12)} // Increase minute
              onDecrement={() => changeMinute(false, minute, setMinute, setHour12)} // Decrease minute
            />

            {/* Colon separator between minutes and seconds */}
            <div className="flex flex-col items-center justify-center">
              <span>:</span>
            </div>

            {/* Second control - user can click up or down to change seconds */}
            <TimeControl
              value={second}
              onIncrement={() => changeSecond(true, second, setSecond, setMinute, setHour12)} // Increase second
              onDecrement={() => changeSecond(false, second, setSecond, setMinute, setHour12)} // Decrease second
            />

            {/* AM/PM toggle - user can click to switch between AM and PM */}
            <span
              className="text-textColour text-sm ml-2 cursor-pointer flex items-end -mt-8"
              onClick={() => toggleAMPM(setIsAM)} // Toggle AM/PM
            >
              {isAM ? "AM" : "PM"}
            </span>
          </div>
        </div>

        {/* 24-hour clock section */}
        <div>
          {/* Title for the 24-hour clock */}
          <h2 className="text-textColour text-4xl mb-2 font-clockDesc text-center">
            24-HOUR
          </h2>
          {/* Clock display for 24-hour format */}
          <div className="flex text-clockDigit24 text-6xl font-digitalClock justify-center items-center space-x-4">
            {/* Hour control - mirrors the 12-hour logic but uses the 24-hour converted value */}
            <TimeControl
              value={hour24}
              onIncrement={() => changeHour(true, hour12, setHour12)} // Increment is still based on 12-hour logic
              onDecrement={() => changeHour(false, hour12, setHour12)} // Decrement as well
            />

            {/* Colon separator between hours and minutes */}
            <div className="flex flex-col items-center justify-center">
              <span>:</span>
            </div>

            {/* Minute control - mirrors the 12-hour logic */}
            <TimeControl
              value={minute}
              onIncrement={() => changeMinute(true, minute, setMinute, setHour12)} // Increase minute
              onDecrement={() => changeMinute(false, minute, setMinute, setHour12)} // Decrease minute
            />

            {/* Colon separator between minutes and seconds */}
            <div className="flex flex-col items-center justify-center">
              <span>:</span>
            </div>

            {/* Second control - mirrors the 12-hour logic */}
            <TimeControl
              value={second}
              onIncrement={() => changeSecond(true, second, setSecond, setMinute, setHour12)} // Increase second
              onDecrement={() => changeSecond(false, second, setSecond, setMinute, setHour12)} // Decrease second
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;

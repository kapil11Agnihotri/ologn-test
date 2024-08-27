import React from "react";
import { WeatherCardProps } from "../types/WeatherViewTypes";

const WeatherCard: React.FC<WeatherCardProps> = ({ title, value }) => {
  return (
    <div className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
      <div className="z-20 flex flex-col justify-center items-center">
        <span className="font-bold text-6xl ml-2">{value}</span>
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
};

export default WeatherCard;

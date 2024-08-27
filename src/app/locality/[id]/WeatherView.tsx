"use client";
import React, { useEffect, useState } from "react";
import Searchbar from "@/app/components/Searchbar";
import WeatherCard from "@/app/components/WeatherCard";
import Link from "next/link";
import { WeatherViewProps } from "@/app/types/WeatherViewTypes";
import { useParams, useSearchParams } from "next/navigation";

const WeatherView: React.FC<WeatherViewProps> = ({ weatherData }) => {
  const [location, setLocation] = useState<string>();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams) {
      // Extract the value of interest
      const rawLocation = searchParams.toString(); // This will give you the full query string
      const decodedLocation = decodeURIComponent(rawLocation); // Decodes the encoded part

      // Further parsing if needed
      const [location] = decodedLocation.split("="); // Split by "=" to remove anything after it
      setLocation(`${location.replaceAll("+", "")}`);
    }
  }, [searchParams]);

  return (
    <div>
      {weatherData ? (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
          <Link
            href="/"
            title="Back to Search"
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text"
          >
            Weather Forecast
          </Link>
          <div className="mb-[200px]">
            <Searchbar />
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 text-transparent bg-clip-text ml-2">
              {location}
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <WeatherCard
                title="Temperature"
                value={weatherData?.temperature}
              />
              <WeatherCard
                title="Rain Accumulation"
                value={weatherData?.rain_accumulation}
              />
              <WeatherCard title="Humidity" value={weatherData?.humidity} />
              <WeatherCard
                title="Rain Intensity"
                value={weatherData?.rain_intensity}
              />
              <WeatherCard
                title="Wind Direction"
                value={weatherData?.wind_direction}
              />
              <WeatherCard title="Wind Speed" value={weatherData?.wind_speed} />
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
            No weather data available
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default WeatherView;

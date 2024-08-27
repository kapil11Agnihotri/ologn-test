import { Params, WeatherData } from "@/app/types/WeatherViewTypes";
import React from "react";
import WeatherView from "./WeatherView";

const fetchWeatherData = async (id: string) => {
  try {
    const response = await fetch(
      `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${id}`,
      {
        headers: {
          "X-Zomato-Api-Key": "daf62ec0885d26efc78f3d50eb607712",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data: any = await response.json();
    return data?.locality_weather_data;
  } catch (err: any) {}
};

const LocalityWeather: React.FC<Params> = async ({ params }) => {
  const { id } = params;

  // Function to fetch weather data
  const weatherData: WeatherData = await fetchWeatherData(id);

  return (
    <>
      <WeatherView weatherData={weatherData} />
    </>
  );
};
export default LocalityWeather;

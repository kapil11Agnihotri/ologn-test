export interface WeatherData {
  temperature: number | null;
  humidity: number | null;
  wind_speed: number | null;
  wind_direction: number | null;
  rain_intensity: number | null;
  rain_accumulation: number | null;
}

export interface Params {
  params: {
    id: string;
  };
}
export interface WeatherViewProps {
  weatherData: WeatherData;
}

export interface WeatherCardProps {
  title: string | null;
  value: number | null;
}

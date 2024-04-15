import React from "react";
import { NewDiary, WeatherEnum, WeatherTypeProps } from "../utils/types";

const Weather: React.FC<WeatherTypeProps> = ({ weather, setNewDiary }) => {
  const handleWeatherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedWeather = e.target.value as WeatherEnum;
    setNewDiary((prevDiary: NewDiary) => ({
      ...prevDiary,
      weather: selectedWeather,
    }));
  };
  return (
    <div className="visibility_and_weather_container">
      <p>Weather:</p>
      <div>
        <label htmlFor="sunny">Sunny</label>
        <input type="radio" name="weather" id="sunny" value="sunny" checked={weather === WeatherEnum.Sunny} onChange={handleWeatherChange} />
      </div>
      <div>
        <label htmlFor="rainy">Rainy</label>
        <input type="radio" name="weather" id="rainy" value="rainy" checked={weather === WeatherEnum.Rainy} onChange={handleWeatherChange} />
      </div>
      <div>
        <label htmlFor="cloudy">Cloudy</label>
        <input type="radio" name="weather" id="cloudy" value="cloudy" checked={weather === WeatherEnum.Cloudy} onChange={handleWeatherChange} />
      </div>
      <div>
        <label htmlFor="stormy">Stormy</label>
        <input type="radio" name="weather" id="stormy" value="stormy" checked={weather === WeatherEnum.Stormy} onChange={handleWeatherChange} />
      </div>
      <div>
        <label htmlFor="windy">Windy</label>
        <input type="radio" name="weather" id="windy" value="windy" checked={weather === WeatherEnum.Windy} onChange={handleWeatherChange} />
      </div>
    </div>
  );
};

export default Weather;

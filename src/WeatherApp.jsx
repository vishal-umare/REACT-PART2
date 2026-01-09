import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  let [WeatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelLike: 17.35,
    humidity: 37,
    temp: 18.48,
    tempMax: 18.48,
    tempMin: 18.48,
    weather: "Clouds",
  });

  function updateInfo(result){
    setWeatherInfo(result);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBox updateInfo= {updateInfo}/>
      <InfoBox info= {WeatherInfo}/>
    </div>
  );
}

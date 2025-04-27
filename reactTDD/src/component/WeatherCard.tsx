import { useEffect, useState } from "react";
import { City } from "../Interface/index"

interface Weather{
  temptaure : number,
  main: string
}

interface weatherProps {
  city: City,
}

function WeatherCard({ city }: weatherProps) {
  const [weather,setWeather] = useState<Weather>();

  useEffect(()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=258260088941baa1f1db1fc0fd59259c&units=metric`)
    .then(r=>r.json())
      .then(data => { setWeather({ temptaure :data.main.temp,main:data.weather[0].main})})
  });

  return (
    <li key={`${city.lat}-${city.lon}`}>
      <h2>{city.name}</h2>
      <span>{weather?weather.temptaure:"-/-"}</span>
      <span>{weather ? weather.main : "-/-"}</span>
    </li>
  );
}

export default WeatherCard;

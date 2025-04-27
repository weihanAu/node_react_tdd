import React, { ChangeEvent } from 'react';
import './App.css';
import { useState } from 'react';
import {createMockServer} from "./__test__/APIResponse/mokeAPIFile"
import Search from './component/Search';
import {City} from "./Interface/index"
import WeatherCard from './component/WeatherCard';

if(process.env.NODE_ENV=="development"){
  createMockServer();
}

function App() {
  const [weatherList,setWeatherList] = useState<City[]>([]);

  const addCityClickHandler =(city:City)=>{
    setWeatherList((preState)=>{
      return [...preState,city];
    });
  }
  return (
    <div className="App">
     <h1>Weather Application</h1>
     <Search addCityClickHandler ={addCityClickHandler}/>
     <div data-testid="my-list-weather">
      <ul>
          {weatherList.map((city) => <WeatherCard key={`${city.lat}-${city.lon}`} city={city}/>)}
      </ul>
     </div>
    </div>
  );
}

export default App;

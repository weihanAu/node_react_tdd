import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { City } from "../Interface/index";

interface searchProp {
  addCityClickHandler: (city: City) => void
}

const Search = ({ addCityClickHandler }: searchProp) => {
  const [searchQuery, setSearchQuery] = useState<String>('');
  const [searchResults, setSearchResults] = useState<City[]>([]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5`;
    fetch(url)
      .then((r: Response) => {
        return r.json();
      })
      .then((cities) => {
        setSearchResults(cities.map((city: any) => {
          return {
            name: city.name,
            lat: city.lat,
            lon: city.lon,
            country: city.country,
            state: city.state
          }
        }))
      })
      .catch(error => { console.log(error) });
  }
  return (
    <div className='search-container'>
      <input placeholder='type a city name to search' type='input' data-testid="search-input" onChange={onChangeHandler} />
      <button data-testid="search-button" onClick={onClickHandler} >search</button>
      {searchResults.length > 0 &&
        <div data-testid="search-results">
          <ul>
            {searchResults.map((city) => <li onClick={() => { addCityClickHandler(city); setSearchResults([]); }} key={`${city.lat}-${city.lon}`}>{city.name}</li>)}
          </ul>
        </div>}
    </div>
  )
}

export default Search;
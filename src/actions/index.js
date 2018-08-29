import axios from 'axios';
const API_KEY = '95f116436fe01a5f3d5bdd63627e4298';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

const FETCH_WEATHER = "FETCH_WEATHER";

function fetchWether(city){
  const url = `${ROOT_URL}&q=${city},es`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export {FETCH_WEATHER, fetchWether};

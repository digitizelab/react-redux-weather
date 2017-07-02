import axios from 'axios';

const API_KEY = 'aa8625f311b719c1833e3c63042b1fa9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    let url = `${ROOT_URL}&q=${city},lk`;
    let request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
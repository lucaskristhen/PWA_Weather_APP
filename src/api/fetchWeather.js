import axios from 'axios'; 

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY ='31377756e517be7abafedff53c8d8276';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params:{
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
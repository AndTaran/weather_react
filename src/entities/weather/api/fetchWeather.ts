import axios from "axios";
import {WeatherTypes} from "../model/types";

export async function fetchWeather(lat: number, lon: number, API_KEY: string): Promise<WeatherTypes> {
    const response = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${API_KEY}&units=metric`)
    return response.data
}
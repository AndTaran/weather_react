import axios from "axios";
import {WeatherTypes} from "../model/types";

export async function fetchWeather(cityLat: number, cityLon: number, API_KEY: string): Promise<WeatherTypes> {
    try {
        const response = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&lang=ru&appid=${API_KEY}&units=metric`)
        return response.data
    } catch (error) {
        throw error
    }
}
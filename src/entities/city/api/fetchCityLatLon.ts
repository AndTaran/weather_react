import axios from "axios";
import {TypeCity} from "../model/types";

export async function fetchCityLatLon(cityName: string, API_KEY: string): Promise<TypeCity> {
    const response = await axios(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
    return response.data
}
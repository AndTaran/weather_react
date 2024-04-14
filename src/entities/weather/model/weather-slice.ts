import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { WeatherTypes } from './types';

interface WeatherState {
    weatherData: WeatherTypes | null
}

const initialState: WeatherState  = {
    weatherData: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addWeather: (state, action: PayloadAction<WeatherTypes>) => {
            state.weatherData = action.payload
        }
    },
})
export const {addWeather} = weatherSlice.actions

export default weatherSlice.reducer
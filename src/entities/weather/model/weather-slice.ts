import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {WeatherTypes} from "./types";

// const initialState: WeatherTypes = {
//     weather: [
//         {
//             id: null,
//             main: null,
//             description: null,
//             icon: null
//         }
//     ],
//     main: {
//         temp: null,
//         feels_like: null,
//         temp_min: null,
//         temp_max: null,
//         pressure: null,
//         humidity: null
//     },
//     wind: {
//         speed: null,
//     },
//     sys: {
//         country: null,
//     },
//     name: null,
//     cod: null,
// }

const initialState: any = {}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addWeather: (state, action: PayloadAction<object>) => {
            // @ts-ignore
            state.initialState = action.payload
        }
    },
})
export const {addWeather} = weatherSlice.actions

export default weatherSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import {EmptyCity, StateCity} from "./types";


const initialState: StateCity = {
    cityName: '',
    lat: null,
    lon: null,
    emptyCity: EmptyCity.search
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        addCityName: (state, action) => {
            state.cityName = action.payload
        },
        addCityLat: (state, action) => {
            state.lat = action.payload
        },
        addCityLon: (state, action) => {
            state.lon = action.payload
        },
        changeEmptyCity: (state, action) => {
            state.emptyCity = action.payload
        }
    },
})
export const {addCityName, addCityLat, addCityLon, changeEmptyCity} = citySlice.actions

export default citySlice.reducer
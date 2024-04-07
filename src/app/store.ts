import {configureStore} from '@reduxjs/toolkit'
import cityReducer from '../entities/city/model/city-slice'
import weatherReducer from "../entities/weather/model/weather-slice";
import userReducer from "../entities/user/model/user-slice"

export const store = configureStore({
    reducer: {
        city: cityReducer,
        weather: weatherReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
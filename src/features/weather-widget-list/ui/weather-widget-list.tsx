import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import {changeEmptyCity} from "../../../entities/city/model/city-slice";
import {addWeather} from "../../../entities/weather/model/weather-slice";
import {fetchWeather} from "../../../entities/weather/api/fetchWeather";
import {
    WeatherWidgetLargeV2,
    WeatherWidgetMedium,
    WeatherWidgetSmall
} from "../../../entities/weather";
import {BasicSkeleton} from "../../../shared/skeleton/basic-skeleton";
import {Tab, Tabs} from "@mui/material";
import CustomTabPanel from "../../../shared/tabs/CustomTabPanel";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import Typography from "@mui/material/Typography";


export function WeatherWidgetList() {
    const API_KEY: string = '8579ddb8b2bc1a2ba566d5039c2cb8d9'
    const dispatch = useAppDispatch()
    const cityLat = useAppSelector((state) => state.city.lat)
    const cityLon = useAppSelector((state) => state.city.lon)
    const weatherInfo = useAppSelector((state) => state.weather.initialState)
    const [tabValue, setTabValue] = React.useState<string>('lg');
    const [error, setError] = useState<string>("")

    const handleChangeTab = (event: any, newValue: string) => {
        if (event !== tabValue) {
            setTabValue(newValue);
        }
    };

    useEffect(() => {
        if (cityLat !== null && cityLon !== null) {
            fetchWeather(cityLat, cityLon, API_KEY).then((r) => {
                dispatch(addWeather(r))
                dispatch(changeEmptyCity('found'))
                setError("")
            }).catch((reportError) => {
                setError(reportError.message)
            })
        }
    }, [cityLat, cityLon, dispatch]);


    return (
        <>
            {error ? (<Box>
                <Typography textAlign={"center"} color={"red"}>{error}</Typography>
            </Box>) : ""}

            <Tabs
                onChange={handleChangeTab}
                value={tabValue}
                centered
            >
                <Tab value={'lg'} label="LG"/>
                <Tab value={'md'} label="MD"/>
                <Tab value={'sm'} label="SM"/>
            </Tabs>

            {weatherInfo ? (
                <Box m={3}>
                    <CustomTabPanel value={tabValue} index={'lg'}>
                        <WeatherWidgetLargeV2
                            icon={weatherInfo.weather[0].icon}
                            temp={weatherInfo.main.temp}
                            cityName={weatherInfo.name}
                            country={weatherInfo.sys.country}
                            weatherDescription={weatherInfo.weather[0].description}
                            feelsLike={weatherInfo.main.feels_like}
                            tempMin={weatherInfo.main.temp_min}
                            tempMax={weatherInfo.main.temp_max}
                            windSpeed={weatherInfo.wind.speed}
                            humidity={weatherInfo.main.humidity}/>
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={'md'}>
                        <WeatherWidgetMedium
                            icon={weatherInfo.weather[0].icon}
                            temp={weatherInfo.main.temp}
                            cityName={weatherInfo.name}
                            weatherDescription={weatherInfo.weather[0].description}/>
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={'sm'}>
                        <WeatherWidgetSmall
                            icon={weatherInfo.weather[0].icon}
                            temp={weatherInfo.main.temp}
                            cityName={weatherInfo.name}/>
                    </CustomTabPanel>
                </Box>
            ) : (
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    m={2}>
                    <BasicSkeleton width="60%" height="55vh"/>
                </Box>
            )}
        </>
    )
}
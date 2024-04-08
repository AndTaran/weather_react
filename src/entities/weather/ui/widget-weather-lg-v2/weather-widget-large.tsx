import React from "react";
import './weather-widget-large.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {OptionsDate} from "../../model/types";
import {WeatherInfo} from "../../model/types";

export const WeatherWidgetLargeV2 = React.memo(
    ({
         icon,
         temp,
         weatherDescription,
         cityName,
         feelsLike,
         tempMax,
         tempMin,
         windSpeed,
         humidity,
         country
     }: WeatherInfo) => {
        const date: Date = new Date()
        const options: OptionsDate = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        const currentDate = date.toLocaleString('ru-RU', options)

        return (
            <Box className="main">
                <Typography className="location" component="p"
                    // @ts-ignore
                            variant="p">{`${cityName}, ${country}`}</Typography>
                <Box>
                    <Typography className="date">
                        {currentDate}
                    </Typography>
                </Box>
                <Box>
                    <img
                        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                        alt="иконка погоды"/>
                </Box>
                <Box className="weather-temp">
                    <Typography component="p"
                        // @ts-ignore
                                variant="p">{Math.round(temp)}&deg;</Typography>

                </Box>
                <Box>
                    <Typography
                        className="temp_description"
                        component="p"
                        // @ts-ignore
                        variant="p">
                        {weatherDescription}
                    </Typography>
                </Box>


                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    textAlign="center"
                >
                    <Box>

                    </Box>
                </Box>

                <hr/>
                <Typography className="feels_like"
                    // @ts-ignore
                            variant="p" component="p">
                    Ощущается как: {Math.round(feelsLike)}&deg;
                </Typography>
                <Box display="flex" justifyContent='space-between'>
                    <Box textAlign='left'>
                        <Typography component="p"
                            // @ts-ignore
                                    variant="p">Мин: {Math.round(tempMin)}&deg;</Typography>
                        <Typography component="p"
                            // @ts-ignore
                                    variant="p">Макс: {Math.round(tempMax)}&deg;</Typography>
                    </Box>
                    <Box textAlign='left'>
                        <Typography component="p"
                            // @ts-ignore
                                    variant="p">Скорость
                            ветра: {Math.round(windSpeed)} km/h</Typography>
                        <Typography component="p"
                            // @ts-ignore
                                    variant="p">Влажность: {humidity} %</Typography>
                    </Box>
                </Box>
            </Box>
        )
    }
)
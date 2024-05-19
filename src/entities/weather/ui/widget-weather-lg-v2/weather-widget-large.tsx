import React from "react";
import "./weather-widget-large.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
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
         country,
     }: WeatherInfo) => {
        const date = new Date();
        const options: OptionsDate = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        const currentDate = date.toLocaleString("ru-RU", options);

        const formattedTemp = Math.round(temp as number);
        const formattedFeelsLike = Math.round(feelsLike as number);
        const formattedTempMin = Math.round(tempMin as number);
        const formattedTempMax = Math.round(tempMax as number);
        const formattedWindSpeed = Math.round(windSpeed as number);
        const formattedHumidity = Math.round(humidity as number);

        return (
            <Box className='main'>
                <Typography
                    className='location'
                    variant='h5'
                >{`${cityName}, ${country}`}</Typography>
                <Typography className='date'>{currentDate}</Typography>
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                    alt='Погода'
                />
                <Typography
                    className='weather-temp'
                    variant='h3'
                >
                    {formattedTemp}&deg;
                </Typography>
                <Typography
                    className='temp_description'
                    variant='inherit'
                >
                    {weatherDescription}
                </Typography>

                <Divider
                    aria-hidden='true'
                    sx={{m: 1}}
                />
                <Typography
                    className='feels_like'
                    variant='inherit'
                >
                    Ощущается как: {formattedFeelsLike}&deg;
                </Typography>
                <Box
                    display='flex'
                    justifyContent='space-between'
                >
                    <Box textAlign='left'>
                        <Typography variant='inherit'>Мин: {formattedTempMin}&deg;</Typography>
                        <Typography variant='inherit'>Макс: {formattedTempMax}&deg;</Typography>
                    </Box>
                    <Box textAlign='left'>
                        <Typography variant='inherit'>
                            Скорость ветра: {formattedWindSpeed} km/h
                        </Typography>
                        <Typography variant='inherit'>Влажность: {formattedHumidity} %</Typography>
                    </Box>
                </Box>
            </Box>
        );
    }
);

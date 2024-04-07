import React from "react";
import './weather-widget-large.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {OptionsDate} from "../../model/types";

export const WeatherWidgetLarge = React.memo(
    ({weatherInfo}: any) => {
        const date = new Date()
        const options: OptionsDate = {
            // weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        const currentDate = date.toLocaleString('ru-RU', options)
        const weekday = date.toLocaleString('ru-RU', {weekday: "long"})

        // @ts-ignore
        return (
            <Box className="main">
                <Box display="flex" justifyContent="space-between">
                    <Typography
                        component="p"
                        // @ts-ignore
                        variant="p">
                        {weatherInfo.name}
                    </Typography>
                    <Typography
                        className="temp_description"
                        component="p"
                        // @ts-ignore
                        variant="p">
                        {weatherInfo.weather[0].description}
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    textAlign="center"
                >
                    <Box>
                        <Box className="weather-temp">
                            <Typography component="p"
                                // @ts-ignore
                                        variant="p">{Math.round(weatherInfo.main.temp)}°C</Typography>
                            <Typography>
                                {weekday}
                            </Typography>
                            <Typography>
                                {currentDate}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <img
                            src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                            alt="иконка погоды"/>
                    </Box>
                </Box>

                <hr/>
                <Typography className="feels_like"
                    // @ts-ignore
                            variant="p" component="p">
                    Ощущается как: {Math.round(weatherInfo.main.feels_like)}°
                </Typography>
                <br/>
                <Typography component="p"
                    // @ts-ignore
                            variant="p">Минимальная
                    температура: {Math.round(weatherInfo.main.temp_min)}°</Typography>
                <Typography component="p"
                    // @ts-ignore
                            variant="p">Максимальная
                    температура: {Math.round(weatherInfo.main.temp_max)}°</Typography>
                {/*<br/>*/}
                {/*<Typography component="p" variant="p">Широта: {weatherInfo.coord.lat}</Typography>*/}
                {/*<Typography component="p" variant="p">Долгота: {weatherInfo.coord.lon}</Typography>*/}
                <br/>
                {/*<Typography component="p" variant="p">Видимость: {weatherInfo.visibility} метров</Typography>*/}
                <Typography component="p"
                    // @ts-ignore
                            variant="p">Скорость
                    ветра: {Math.round(weatherInfo.wind.speed)} km/h</Typography>
                <Typography component="p"
                    // @ts-ignore
                            variant="p">Порыв ветра: {Math.round(weatherInfo.wind.gust)} km/h</Typography>
                <br/>
                {/*<Typography component="p" variant="p">Давление: {weatherInfo.main.pressure}</Typography>*/}
                <Typography component="p"
                    // @ts-ignore
                            variant="p">Влажность: {weatherInfo.main.humidity} %</Typography>
            </Box>
        )
    }
)
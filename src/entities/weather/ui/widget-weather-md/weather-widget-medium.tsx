import React from "react";
import './weather-widget-medium.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {WeatherInfo} from "../../model/types";

type WeatherInfoProps = Pick<WeatherInfo, "cityName" | "icon" | "temp" | "weatherDescription">
export const WeatherWidgetMedium = React.memo(
    ({icon, temp, weatherDescription, cityName}: WeatherInfoProps) => {
        const date: Date = new Date()
        const month: string = date.toLocaleString('ru-RU', {month: 'long'})

        return (
            <Box className="widget">
                <Box className="weatherIcon">
                    <img className="wi wi-day-cloudy"
                         src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                         alt="иконка погоды"/>
                </Box>
                <Box className="weatherInfo">
                    <Typography
                        component="span"
                        // @ts-ignore
                        variant={"p"}
                        className="temperature">
                        <span>{Math.round(temp)}&deg;</span>
                    </Typography>
                    <Box className="description">
                        <Typography component="p"
                            // @ts-ignore
                                    variant="p"
                                    className="weatherCondition">
                            {weatherDescription}
                        </Typography>
                        <Typography
                            // @ts-ignore
                            variant="p" component="p" className="place">
                            {cityName}
                        </Typography>
                    </Box>
                </Box>
                <Box className="date">
                    <Typography
                        // @ts-ignore
                        variant="p" component="p">{`${month}`}</Typography>
                    <Typography
                        // @ts-ignore
                        variant="p" component="p" className="date">{`${date.getDate()}`}</Typography>
                </Box>
            </Box>
        )
    })
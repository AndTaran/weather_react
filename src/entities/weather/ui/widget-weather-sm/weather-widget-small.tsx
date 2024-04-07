import React from "react";
import './weather-widget-small.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {WeatherInfo, WeatherTypes} from "../../model/types";

type WeatherInfoProps = Pick<WeatherInfo, "cityName" | "icon" | "temp">
// type WeatherInfoProps2 = Pick<WeatherTypes, "weather" | "main" | "name">

export const WeatherWidgetSmall = React.memo(
    ({icon, temp, cityName}: WeatherInfoProps) => {

        return (
            <Box className="small_widget">
                <Box className="widget_temp">
                    <img className="weather_icon"
                         src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                         alt="иконка погоды"/>
                </Box>
                <Box display="flex"
                     flexDirection="column"
                     className="widget_info">
                    <Typography
                        variant="h4"
                        component="span">{Math.round(temp)}&deg;
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="span"
                        className="city_name">{cityName}
                    </Typography>
                </Box>
            </Box>
        )
    }
)
import React from "react";
import "./weather-widget-small.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { WeatherInfo } from "../../model/types";

type WeatherInfoProps = Pick<WeatherInfo, "cityName" | "icon" | "temp">;

export const WeatherWidgetSmall = React.memo(({ icon, temp, cityName }: WeatherInfoProps) => {
	return (
		<Box className='small_widget'>
			<Box className='widget_icon'>
				<img
					src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
					alt='иконка погоды'
				/>
			</Box>
			<Box
				display='flex'
				flexDirection='column'
				className='widget_info'
			>
				<Typography variant='h4'>{Math.round(temp as number)}&deg;</Typography>
				<Typography
					variant='inherit'
					className='city_name'
				>
					{cityName}
				</Typography>
			</Box>
		</Box>
	);
});

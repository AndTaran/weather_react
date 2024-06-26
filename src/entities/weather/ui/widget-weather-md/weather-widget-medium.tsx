import React from "react";
import "./weather-widget-medium.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { WeatherInfo } from "../../model/types";

type WeatherInfoProps = Pick<WeatherInfo, "cityName" | "icon" | "temp" | "weatherDescription">;

export const WeatherWidgetMedium = React.memo(
	({ icon, temp, weatherDescription, cityName }: WeatherInfoProps) => {
		const date: Date = new Date();
		const month: string = date.toLocaleString("ru-RU", { month: "long" });
		const formattedTemp = Math.round(temp as number);

		return (
			<Box className='widget'>
				<Box className='weatherIcon'>
					<img
						className='wi wi-day-cloudy'
						src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
						alt='иконка погоды'
					/>
				</Box>
				<Box className='weatherInfo'>
					<Typography
						variant='inherit'
						className='temperature'
					>
						<span>{formattedTemp}&deg;</span>
					</Typography>
					<Box className='description'>
						<Typography
							variant='inherit'
							className='weatherCondition'
						>
							{weatherDescription}
						</Typography>
						<Typography
							variant='inherit'
							className='place'
						>
							{cityName}
						</Typography>
					</Box>
				</Box>
				<Box className='date'>
					<Typography variant='inherit'>{month}</Typography>
					<Typography variant='inherit'>{date.getDate()}</Typography>
				</Box>
			</Box>
		);
	}
);

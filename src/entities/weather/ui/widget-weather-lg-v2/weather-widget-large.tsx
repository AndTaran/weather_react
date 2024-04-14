import React from "react";
import "./weather-widget-large.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { OptionsDate } from "../../model/types";
import { WeatherInfo } from "../../model/types";

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
		const date: Date = new Date();
		const options: OptionsDate = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};

		const currentDate = date.toLocaleString("ru-RU", options);

		return (
			<Box className='main'>
				<Typography
					className='location'
					variant='h5'
				>
					{`${cityName}, ${country}`}
				</Typography>

				<Box>
					<Typography className='date'>{currentDate}</Typography>
				</Box>
				<Box>
					<img
						src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
						alt='иконка погоды'
					/>
				</Box>
				<Box className='weather-temp'>
					<Typography variant='inherit'>{Math.round(temp as number)}&deg;</Typography>
				</Box>
				<Box>
					<Typography
						className='temp_description'
						variant='inherit'
					>
						{weatherDescription}
					</Typography>
				</Box>

				<Divider
					aria-hidden='true'
					sx={{ m: 1 }}
				/>
				<Typography
					className='feels_like'
					variant='inherit'
				>
					Ощущается как: {Math.round(feelsLike as number)}&deg;
				</Typography>
				<Box
					display='flex'
					justifyContent='space-between'
				>
					<Box textAlign='left'>
						<Typography variant='inherit'>
							Мин: {Math.round(tempMin as number)}&deg;
						</Typography>
						<Typography variant='inherit'>
							Макс: {Math.round(tempMax as number)}&deg;
						</Typography>
					</Box>

					<Box textAlign='left'>
						<Typography variant='inherit'>
							Скорость ветра: {Math.round(windSpeed as number)} km/h
						</Typography>
						<Typography variant='inherit'>Влажность: {humidity} %</Typography>
					</Box>
				</Box>
			</Box>
		);
	}
);

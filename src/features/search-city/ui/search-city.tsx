import MainTitle from "../../../shared/title/main-title";
import BasicInput from "../../../shared/input/basic-input";
import BasicButton from "../../../shared/button/basic-button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchCityLatLon } from "../../../entities/city/api/fetchCityLatLon";
import {
	addCityLat,
	addCityLon,
	addCityName,
	changeEmptyCity,
} from "../../../entities/city/model/city-slice";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { EmptyCity } from "../../../entities/city/model/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

export function SearchCity() {
	const API_KEY: string = "8579ddb8b2bc1a2ba566d5039c2cb8d9";
	const dispatch = useAppDispatch();
	const cityName = useAppSelector((state) => state.city.cityName);
	const emptyCity = useAppSelector((state) => state.city.emptyCity);
	const [error, setError] = useState<string>("");

	const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
		// Проблема - при каждом добавлении символа в поле выполняется ререндер
		// Решение - обернуть дочерние компоненты в React.memo
		dispatch(addCityName(event.target.value));
	};
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === "Enter" || event.type === "click") {
			setError("");
			if (cityName !== "") {
				fetchCityLatLon(cityName, API_KEY)
					.then((response) => {
						dispatch(addCityLat(response[0].lat));
						dispatch(addCityLon(response[0].lon));
						dispatch(changeEmptyCity(EmptyCity.found));
					})
					.catch((reportError) => {
						dispatch(changeEmptyCity(EmptyCity.notFound));
					})
					.finally(() => {
						dispatch(addCityName(""));
					});
			} else dispatch(changeEmptyCity(EmptyCity.notFound));
		}
	};

	return (
		<Box>
			<MainTitle title='Прогноз погоды' />
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				m={2}
			>
				<Box mb={1}>
					<BasicInput
						value={cityName}
						label={"Город"}
						handleFuncChange={handleCityChange}
						handleKeyPress={handleKeyPress}
						placeholder={"Введите город"}
					/>
				</Box>
				<Box mb={1}>
					<BasicButton
						funcOnClick={handleKeyPress}
						btnName={"Посмотреть погоду"}
					/>
				</Box>
			</Box>
			{emptyCity === EmptyCity.notFound && (
				<Typography
					component='h5'
					textAlign='center'
					variant='h5'
				>
					{error !== "" ? error : "Город не найден..."}
				</Typography>
			)}
		</Box>
	);
}

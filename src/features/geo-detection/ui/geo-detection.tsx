import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BasicButton from "../../../shared/button/basic-button";
import {useState} from "react";
import {addCityLat, addCityLon, changeEmptyCity} from "../../../entities/city/model/city-slice";
import {EmptyCity} from "../../../entities/city/model/types";
import {GeoTypes} from "../model/types";
import {useAppDispatch} from "../../../app/hooks";

export function GeoDetection() {
    const dispatch = useAppDispatch()
    const [allowGeo, setAllowGeo] = useState<boolean>(true)

    const getCurrentPosition = () => {
        const options: GeoTypes["options"] = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        const error: GeoTypes["error"] = (err) => {
            console.warn(`Ошибка геолокации(${err.code}): ${err.message}`);
            setAllowGeo(false)
        }

        const success: GeoTypes["success"] = (pos) => {
            console.log(pos)
            const coords = pos.coords;
            dispatch(addCityLat(coords.latitude))
            dispatch(addCityLon(coords.longitude))
            dispatch(changeEmptyCity(EmptyCity.found))
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    return (
        <Box textAlign="center">
            <Typography
                variant="h5">
                Введите город
            </Typography>
            <Box>
                <Typography
                    variant="h5">
                    или
                </Typography>
                <BasicButton funcOnClick={getCurrentPosition}
                             disabled={!allowGeo}
                             btnName={allowGeo ? "Определить геопозицию" : "Геопозиция запрещена"}/>
            </Box>
        </Box>
    )
}
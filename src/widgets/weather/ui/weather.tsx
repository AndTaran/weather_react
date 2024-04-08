import Box from "@mui/material/Box";
import {SearchCity} from "../../../features/search-city";
import {WeatherWidgetList} from "../../../features/weather-widget-list";
import {GeoDetection} from "../../../features/geo-detection";
import {EmptyCity} from "../../../entities/city/model/types";
import {useAppSelector} from "../../../app/hooks";

export function Weather() {
    const emptyCity = useAppSelector((state) => state.city.emptyCity);
    return (
        <Box>
            <SearchCity/>
            {emptyCity === EmptyCity.search && <GeoDetection/>}
            {emptyCity === EmptyCity.found && <WeatherWidgetList/>}
        </Box>
    );
}

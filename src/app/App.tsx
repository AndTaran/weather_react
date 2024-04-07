import WeatherPage from "../pages/weather/weather-page";
import {Header} from "../widgets/header";
import "./app.css"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AuthPage from "../pages/auth/auth-page";
import {useAppSelector} from "./hooks";

export default function App() {
    const email = useAppSelector(state => state.user.email)

    return (
        <Box className="app">
            <CssBaseline/>
            <Header/>
            <Container>
                {email === "" ? (<AuthPage/>) : (<WeatherPage/>)}
            </Container>


        </Box>
    );
}

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BasicButton from "../../../shared/button/basic-button";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {clearUserEmail} from "../../../entities/user/model/user-slice";
import React from "react";

export function Header() {
    const dispatch = useAppDispatch();
    const email = useAppSelector(state => state.user.email);
    return (
        <Box>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="h6" sx={{flexGrow: 1}}>
                        {email ? "Прогноз погоды" : "Регистрация/Авторизация"}
                    </Typography>

                    {email ? <Typography mr={1}>{email}</Typography> : ""}

                    {email && <BasicButton funcOnClick={() => dispatch(clearUserEmail())}
                                           btnName="Выход"/>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
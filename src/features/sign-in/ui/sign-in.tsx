import {signInWithEmailAndPassword} from "firebase/auth";
import React, {useState} from "react";
import {auth} from "../../../app/firebase";
import Box from "@mui/material/Box";
import MainTitle from "../../../shared/title/main-title";
import {useAppDispatch} from "../../../app/hooks";
import {addUserEmail} from "../../../entities/user/model/user-slice";
import Typography from "@mui/material/Typography";
import BasicInput from "../../../shared/input/basic-input";
import BasicButton from "../../../shared/button/basic-button";

export const SignIn = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    function logIn(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (email === "" && password === "") {
            setError("Заполните email/пароль");
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user);
                    setError("");
                    dispatch(addUserEmail(email))
                })
                .catch((error) => {
                    setError("Аккаунт не найден")
                });
        }
    }

    return (
        <Box component="form">
            <MainTitle title="Авторизация"/>
            <Box mb={2}>
                <BasicInput
                    placeholder="Введите email"
                    value={email}
                    handleFuncChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                />
            </Box>
            <Box mb={2}>
                <BasicInput
                    placeholder="Введите пароль"
                    value={password}
                    handleFuncChange={(e) => setPassword(e.target.value)}
                    type="password"
                    autoComplete="current-password"
                />
            </Box>
            <BasicButton
                funcOnClick={logIn}
                btnName={"Авторизация"}/>
            {error ? <Typography color={"red"}>{error}</Typography> : ""}
        </Box>
    );
}
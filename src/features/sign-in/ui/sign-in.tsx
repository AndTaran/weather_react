import {signInWithEmailAndPassword} from "firebase/auth";
import React, {useState} from "react";
import {auth} from "../../../app/firebase";
import Box from "@mui/material/Box";
import MainTitle from "../../../shared/title/main-title";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useAppDispatch} from "../../../app/hooks";
import {addUserEmail} from "../../../entities/user/model/user-slice";
import Typography from "@mui/material/Typography";

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
        <div>
            <Box component="form">
                <MainTitle title="Авторизация"/>
                <Box mb={2}>
                    <TextField
                        placeholder="Введите email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        autoComplete="email"
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        autoComplete="current-password"
                    />
                </Box>
                <Button variant="contained"
                        size="large"
                        onClick={logIn}>Авторизация</Button>
                {error ? <Typography color={"red"}>{error}</Typography> : ""}
            </Box>
        </div>
    );
}
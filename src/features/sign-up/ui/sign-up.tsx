import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../app/firebase";
import MainTitle from "../../../shared/title/main-title";
import {useAppDispatch} from "../../../app/hooks";
import {addUserEmail} from "../../../entities/user/model/user-slice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const SignUp = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [copyPassword, setCopyPassword] = useState<string>("");
    const [error, setError] = useState<string>("");


    function register(event: { preventDefault: () => void }) {
        event.preventDefault()
        if (copyPassword !== password) {
            setError("Пароли не совпадают")
        } else if (email === "" && password === "") {
            setError("Заполните все поля")
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user)
                    setError("")
                    dispatch(addUserEmail(email))
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log(errorCode)
                    console.log(errorMessage)
                    setError(errorMessage)
                });
        }
    }

    return (
        <>
            <Box component="form"
                // onSubmit={register}
            >
                <MainTitle title="Регистрация"/>
                <Box mb={2}>
                    <TextField
                        placeholder="Введите email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        autoComplete="new-password"
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        placeholder="Введите пароль*"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        autoComplete={"new-password"}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        placeholder="Повторите пароль*"
                        value={copyPassword}
                        onChange={(e) => setCopyPassword(e.target.value)}
                        type="password"
                        autoComplete={"new-password"}
                    />
                </Box>
                <Button variant="contained"
                        size="large"
                        onClick={register}>Регистрация</Button>
                {error ? <Typography maxWidth={223} color={"red"}>{error}</Typography> : ""}
            </Box>
        </>
    );
}
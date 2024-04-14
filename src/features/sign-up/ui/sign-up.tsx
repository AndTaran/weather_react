import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../app/firebase";
import MainTitle from "../../../shared/title/main-title";
import { useAppDispatch } from "../../../app/hooks";
import { addUserEmail } from "../../../entities/user/model/user-slice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BasicInput from "../../../shared/input/basic-input";
import BasicButton from "../../../shared/button/basic-button";

export const SignUp = () => {
	const dispatch = useAppDispatch();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [copyPassword, setCopyPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	function register(event: { preventDefault: () => void }) {
		event.preventDefault();
		if (copyPassword !== password) {
			setError("Пароли не совпадают");
		} else if (email === "" && password === "") {
			setError("Заполните все поля");
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then((response) => {
					setError("");
					dispatch(addUserEmail(response.user.email as string));
				})
				.catch((error) => {
					// const errorCode = error.code;
					const errorMessage = error.message;
					setError(errorMessage);
				});
		}
	}

	return (
		<Box component='form'>
			<MainTitle title='Регистрация' />
			<Box mb={2}>
				<BasicInput
					placeholder='Введите email'
					value={email}
					handleFuncChange={(e) => setEmail(e.target.value)}
					type={"email"}
					autoComplete={"username"}
				/>
			</Box>
			<Box mb={2}>
				<BasicInput
					placeholder='Введите пароль'
					value={password}
					handleFuncChange={(e) => setPassword(e.target.value)}
					type={"password"}
					autoComplete={"new-password"}
				/>
			</Box>
			<Box mb={2}>
				<BasicInput
					placeholder='Повторите пароль'
					value={copyPassword}
					handleFuncChange={(e) => setCopyPassword(e.target.value)}
					type='password'
					autoComplete={"new-password"}
				/>
			</Box>
			<BasicButton
				funcOnClick={register}
				btnName={"Регистрация"}
			/>
			{error ? (
				<Typography
					maxWidth={223}
					color={"red"}
				>
					{error}
				</Typography>
			) : (
				""
			)}
		</Box>
	);
};

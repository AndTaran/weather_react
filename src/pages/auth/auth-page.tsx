import React from 'react';
import {SignUp} from "../../features/sign-up";
import {SignIn} from "../../features/sign-in";
import Box from "@mui/material/Box";

export default function AuthPage() {
    return (
        <Box display="flex" justifyContent="space-around">
            <SignUp/>
            <SignIn/>
        </Box>
    )
}
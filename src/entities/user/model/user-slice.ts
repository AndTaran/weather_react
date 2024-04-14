import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {User} from "./types";

const initialState: User = {
    email: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        clearUserEmail: (state) => {
            state.email = ""
        }
    },
})
export const {addUserEmail, clearUserEmail} = userSlice.actions

export default userSlice.reducer
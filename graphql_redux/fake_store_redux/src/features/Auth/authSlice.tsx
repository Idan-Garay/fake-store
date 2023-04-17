import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface User {
    email: string
    password: string
    authorized: boolean
}

export const initialState = {
    email: '',
    password: '',
    authorized: false,
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<{email: string, password: string}>) => {
            const {email, password} = action.payload
            state.email = email
            state.password = password
            state.authorized = true
        },
        logout: (state) => {
            state = initialState
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer
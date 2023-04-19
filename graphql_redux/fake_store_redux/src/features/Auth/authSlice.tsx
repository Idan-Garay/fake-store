import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface User {
    email: string
    password: string
    authorized: boolean
    authToken: string
}

export const initialState = {
    email: '',
    password: '',
    authorized: false,
    authToken: '',
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<{ email: string, password: string }>) => {
            const { email, password } = action.payload
            state.email = email
            state.password = password
            state.authorized = true
        },
        logout: (state) => {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state, action) => {
                console.log(action)
                console.log('pending')
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                console.log(action)
                console.log('fulfilled')
                state.authorized = true
                state.authToken = action.payload
            })
            .addCase(loginThunk.rejected, (state, action) => {
                console.log(action)
                console.log('rejected')
            })
    }
})

export const loginThunk = createAsyncThunk('auth/login', async ({email, password}: {email: string, password: string}) => {
    const query = `
        query AuthToken($email: String!, $password: String!) {
            authToken(email: $email, password: $password)
        }
    `
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query, 
            variables: {email, password}
        })
    })
    const result = await response.json()
    console.log(result)
    return result['data']['authToken']
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
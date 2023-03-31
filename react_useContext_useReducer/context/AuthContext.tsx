import React, { useReducer } from 'react'

export interface AuthAccount {
    email: string
    password: string
    authenticated: boolean
}

export const defaultAuthAccount = {
    email: '',
    password: '',
    authenticated: false,
}

export const useAuthAccount = () => {
    const reducer = (curr: AuthAccount, partial: Partial<AuthAccount>) => {
        return {
            ...curr,
            ...partial
        }
    }

    return useReducer(reducer, defaultAuthAccount)
}

export const AuthAccountContext = React.createContext<AuthAccount>(defaultAuthAccount)
export const AuthAccountDispatchContext = React.createContext<React.Dispatch<Partial<AuthAccount>> | undefined>(undefined)
import React, { ReactNode } from 'react'
import { Navigate, Outlet, Route, RouteProps } from 'react-router-dom'

interface PrivateRouteProps {
    authenticated: boolean
}

const PrivateRoute = ({ authenticated }: PrivateRouteProps & RouteProps) => {
    return authenticated?<Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute
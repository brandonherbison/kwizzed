import { Navigate, Outlet } from "react-router-dom"

export const Authorized = ({ token }) => {
    if (token) {
        return <Outlet />
    }
    return <Navigate to='/login' replace />
}
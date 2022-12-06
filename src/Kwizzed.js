import { useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"


export const Kwizzed = () => {
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))


    const setToken = (newToken) => {
        localStorage.setItem('auth_token', newToken)
        setTokenState(newToken)
    }
    return <>
        {
            token ? <NavBar token={token} setToken={setToken} /> : null
        }

        <ApplicationViews token={token} setToken={setToken}/>
    </>
}
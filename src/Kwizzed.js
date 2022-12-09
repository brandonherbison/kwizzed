import { useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"



export const Kwizzed = () => {
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

    const setToken = (newToken) => {
        localStorage.setItem('auth_token', newToken)
        setTokenState(newToken)
    }


    return <>

        <ApplicationViews token={token} setToken={setToken}/>
    </>
}
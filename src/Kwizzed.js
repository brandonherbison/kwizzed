import { useEffect, useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { getAllUsers } from "./managers/UserManager"


export const Kwizzed = () => {
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))
    const [users, setUserState] = useState([])

    const setToken = (newToken) => {
        localStorage.setItem('auth_token', newToken)
        setTokenState(newToken)
    }

    const setUser = () => {
        if (token) {
            getAllUsers().then((usersFromAPI) => {
                setUserState(usersFromAPI)
            })
        }
    }

    useEffect(() => {
        setUser()
    }, [])

    const loggedInUser = users.find(user => user.token_number === token)

    return <>

        <ApplicationViews token={token} setToken={setToken} loggedInUser={loggedInUser}/>
    </>
}
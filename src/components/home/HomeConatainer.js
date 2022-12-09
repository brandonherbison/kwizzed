import { useEffect, useState } from "react"
import { getCurrentUser } from "../../managers/UserManager"
import { AdminHome } from "./AdminHome"
import { PlayerHome } from "./PlayerHome"


export const HomeContainer = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data)
        })
    }, [])

    return <>
        {
            currentUser.isStaff
            ? <AdminHome />
            : <PlayerHome />
        }
    </>
}
import { useEffect, useState } from "react"
import { getCurrentUser } from "../../managers/UserManager"
import { AdminHome } from "./AdminHome"
import { PlayerHome } from "./PlayerHome"


export const HomeContainer = () => {

    const [currentUser, setCurrentUser] = useState({})

    const [doneLoading, setDoneLoading] = useState(false)

    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data)
            setDoneLoading(true)
        })
    }, [])

    if (doneLoading) {
        return <>
            {
                currentUser.isStaff
                    ? <AdminHome />
                    : <PlayerHome />
            }
        </>
    }
}
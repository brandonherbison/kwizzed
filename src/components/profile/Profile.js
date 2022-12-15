import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentUser } from "../../managers/UserManager"



export const Profile = () => {

    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getCurrentUser().then((user) => {
            setCurrentUser(user)
        })
    }, [])

    return <>

        <div className="grid grid-cols-1 justify-items-center gap-2 w-1/5 m-auto -mt-40 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={currentUser.profileImageUrl} alt="Avatar" />
                <h5 className="text-xl font-luckiest text-ronBurgundy">{currentUser.firstName} {currentUser.lastName}</h5>
                <span className="text-sm -mt-3 text-ronBurgundy">@{currentUser.username}</span>
                <button onClick={() => navigate('/update-profile')} className="inline-flex items-center mt-2 px-4 py-2 text-sm font-luckiest text-center text-white bg-ronBurgundy rounded-full hover:bg-darkRonBurgundy">
                    Update
                </button>
        </div>

    </>
}
import { useEffect, useState } from "react"
import { getCurrentUser } from "../../managers/UserManager"



export const Profile = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        getCurrentUser().then((user) => {
            setCurrentUser(user)
        })
    }, [])

    return <>

        <div className="w-full pt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">

            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={currentUser.profileImageUrl} alt="Avatar" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{currentUser.firstName} {currentUser.lastName}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">@{currentUser.username}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="/update-profile" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-ronBurgundy rounded-lg">Update</a>
                </div>
            </div>
        </div>

    </>
}
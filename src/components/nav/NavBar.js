import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentUser } from "../../managers/UserManager"
import Logo from "./BrainBulb.png"




export const NavBar = ({ setToken }) => {


    const [open, setOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getCurrentUser().then((user) => {
            setCurrentUser(user)
        })
    }, [])

    const showMenu = () => {
        setOpen(!open)
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('auth_token')
        navigate("/login")

    }

    return <>


        <nav className="bg-pinkBrain border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between">
                <a href="/" className="flex items-center">
                    <img src={Logo} className=" w-14 mr-3 h-14" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-ronBurgundy dark:text-white">Kwizzed</span>
                </a>
                <div className="flex items-center md:order-2">
                    <button onClick={showMenu} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="top">
                        <img className="w-12 h-12 rounded-full" src={currentUser.profileImageUrl} alt="avatar" />
                    </button>

                </div>

            </div>
        </nav>
        {
            open
                ? <div className="flex justify-end container-sm relative">
                    <div className=" w-64 place-self-end bg-white divide-y divide-gray-100 rounded shadow " id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">{currentUser.firstName} {currentUser.lastName} {currentUser.isStaff ? "(Admin)": "(Player)"}</span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{currentUser.email}</span>
                        </div>
                        <ul className="py-1" aria-labelledby="user-menu-button">
                            {
                                currentUser.isStaff
                                    ? <li>
                                        <a onClick={logout} href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                    </li>
                                    : <>
                                        <li>
                                            <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                                        </li>
                                        <li>
                                            <a href="/submitted-questions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submitted Questions</a>
                                        </li>
                                        <li>
                                            <a href="/reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leave a Review</a>
                                        </li>
                                        <li>
                                            <a onClick={logout} href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
                : null
        }


    </>

}

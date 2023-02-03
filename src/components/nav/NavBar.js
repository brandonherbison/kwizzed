import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentUser } from "../../managers/UserManager"
import Logo from "../../designs/BrainBulb.png"




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


        <nav className="bg-pinkBrain sm:px-4 py-2.5 sticky top-0 border shadow-md lg:border-none lg:shadow-none">
            <div className="flex flex-wrap items-center justify-between">
                <a href="/" className="flex items-center">
                    <img src={Logo} className=" w-16 mr-3 h-16" alt="Pink Brain" />
                </a>
                    <span className="self-center lg:text-5xl text-3xl w font-luckiest whitespace-nowrap text-ronBurgundy dark:text-white">Kwizzed!</span>
                <div className="flex items-center md:order-2">
                    <button onClick={showMenu} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-ronBurgundy " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="top">
                        <img className="w-16 h-16 rounded-full" src={currentUser.profileImageUrl} alt="avatar" />
                    </button>

                </div>

            </div>
        </nav>
        <div className={open? "visible relative mr-3 ": "invisible"}>
            <div className="flex justify-end container-sm">
                <div className=" w-64 place-self-end bg-white divide-y divide-ronBurgundy rounded shadow-xl border border-ronBurgundy" id="user-dropdown">
                    <div className="px-4 py-3">
                        <span className="block text-sm text-ronBurgundy">{currentUser.firstName} {currentUser.lastName} {currentUser.isStaff ? "(Admin)" : "(Player)"}</span>
                        <span className="block text-sm font-medium text-ronBurgundy truncate">{currentUser.email}</span>
                    </div>
                    <ul className="" aria-labelledby="user-menu-button">
                        {
                            currentUser.isStaff
                                ? <li>
                                    <a onClick={logout} href="/login" className="block px-4 py-2 text-sm text-ronBurgundy hover:text-pinkBrain hover:bg-ronBurgundy">Sign out</a>
                                </li>
                                : <>
                                    <li>
                                        <a href="/profile" className="block px-4 py-2 text-sm text-ronBurgundy hover:text-pinkBrain hover:bg-ronBurgundy">Profile</a>
                                    </li>
                                    <li>
                                        <a href="/submitted-questions" className="block px-4 py-2 text-sm text-ronBurgundy hover:text-pinkBrain hover:bg-ronBurgundy">Submitted Questions</a>
                                    </li>
                                    <li>
                                        <a href="/reviews" className="block px-4 py-2 text-sm text-ronBurgundy hover:text-pinkBrain hover:bg-ronBurgundy">Leave a Review</a>
                                    </li>
                                    <li>
                                        <a onClick={logout} href="/login" className="block px-4 py-2 text-sm text-ronBurgundy hover:text-pinkBrain hover:bg-ronBurgundy">Sign out</a>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>

    </>

}

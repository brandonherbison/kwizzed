import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, updateUser } from "../../managers/UserManager";



export const UpdateProfile = ({ loggedInUser }) => {

    const [currentUser, setCurrentUser] = useState({});
    const [currentProfile, updateCurrentProfile] = useState({

        username: "",
        profileImageUrl: "",
        email: "",
        bio: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        getCurrentUser().then((user) => {
            setCurrentUser(user)
        })}, [])

    useEffect(() => {
        updateCurrentProfile({
            username: currentUser.username,
            profileImageUrl: currentUser.profileImageUrl,
            email: currentUser.email,
            bio: currentUser.bio
        });
    }, [currentUser]);

    const changeProfileState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = { ...currentProfile };
        copy[domEvent.target.id] = domEvent.target.value;
        updateCurrentProfile(copy);
    };

    const handleUpdateButton = (evt) => {

        evt.preventDefault();
        const player = {
            id: currentUser.id,
            username: currentProfile.username,
            profileImageUrl: currentProfile.profileImageUrl,
            email: currentProfile.email,
            bio: currentProfile.bio,
            isActive: currentUser.isActive
        };
        updateUser(player).then(() => navigate("/profile"));

    }


    return <>
        <form>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input onChange={changeProfileState} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value={currentProfile.username} required />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Image URL</label>
                <input onChange={changeProfileState} type="text" id="profileImageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value={currentProfile.profileImageUrl} required />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input onChange={changeProfileState} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value={currentProfile.email} required />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                <textarea onChange={changeProfileState} id="bio" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " value={currentProfile.bio}></textarea>
            </div>
            <button onClick={handleUpdateButton} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </>
}
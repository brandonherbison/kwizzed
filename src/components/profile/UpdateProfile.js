import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, updateUser } from "../../managers/UserManager";



export const UpdateProfile = () => {

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
        <form className="grid grid-cols-1 gap-3 w-4/5 lg:w-2/5 m-auto -mt-40 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
            <div className="mb-6">
                <label className="block mb-2 text-xl font-luckiest text-ronBurgundy">Username</label>
                <input onChange={changeProfileState} type="text" id="username" className="bg-gray-50 border border-ronBurgundy text-ronBurgundy text-sm rounded-lg focus:ring-ronBurgundy focus:border-ronBurgundy block w-full p-2.5 " defaultValue={currentProfile.username} />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-xl font-luckiest text-ronBurgundy">Profile Image URL</label>
                <input onChange={changeProfileState} type="text" id="profileImageUrl" className="bg-gray-50 border border-ronBurgundy text-ronBurgundy text-sm rounded-lg focus:ring-ronBurgundy focus:border-ronBurgundy block w-full p-2.5 " defaultValue={currentProfile.profileImageUrl} />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-xl font-luckiest text-ronBurgundy">Email address</label>
                <input onChange={changeProfileState} type="email" id="email" className="bg-gray-50 border border-ronBurgundy text-ronBurgundy text-sm rounded-lg focus:ring-ronBurgundy focus:border-ronBurgundy block w-full p-2.5 " defaultValue={currentProfile.email} />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-xl font-luckiest text-ronBurgundy">Bio</label>
                <textarea onChange={changeProfileState} id="bio" rows="4" className="block p-2.5 w-full text-sm text-ronBurgundy bg-gray-50 rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy " defaultValue={currentProfile.bio}></textarea>
            </div>
            <button onClick={handleUpdateButton} type="submit" className="justify-self-end text-white bg-ronBurgundy rounded-full p-2.5 font-luckiest hover:bg-darkRonBurgundy">Submit</button>
        </form>
    </>
}
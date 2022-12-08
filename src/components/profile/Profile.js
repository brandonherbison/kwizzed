


export const Profile = ({ loggedInUser }) => {

    return <>

        <div className="w-full pt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">

            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={loggedInUser?.profile_image_url} alt="Avatar" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{loggedInUser?.full_name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">@{loggedInUser?.user?.username}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="/update-profile" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-ronBurgundy rounded-lg">Update</a>
                </div>
            </div>
        </div>

    </>
}
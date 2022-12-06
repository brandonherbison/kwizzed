



export const Home = ({ token }) => {
    return (
        <>
            <h1>Welcome to Kwizzed</h1>
            <div className="columns-sm container mx-auto ">
                <div className="">

                    <a href="/practice-info" className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-ronBurgundy dark:text-white">Practice</h5>
                        <p className="font-normal text-ronBurgundy dark:text-gray-400">Get the feel for the question format and layout</p>
                    </a>


                </div>
                <div className="">

                    <a href="/category-selector" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-ronBurgundy dark:text-white">Play Now</h5>
                        <p className="font-normal text-ronBurgundy dark:text-gray-400">Test your knowledge in the category of your choosing</p>
                    </a>


                </div>
                <div className="">

                    <a href="/leaderboard" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-ronBurgundy dark:text-white">Leaderboard</h5>
                        <p className="font-normal text-ronBurgundy dark:text-gray-400">See where you stand among the players in the Kwizzed community</p>
                    </a>


                </div>
            </div>
        </>
    )
}
import Logo from '../../designs/practice.png'
import Logo2 from '../../designs/Leaderboard.png'
import Logo3 from '../../designs/play.png'


export const PlayerHome = () => {
    return (
        <>
            <div className=" flex justify-center -mt-36 lg:-mt-20 text-center">
                <div className="grid lg:grid-cols-3 gap-7 md:grid-cols-1 items-end">
                    <div className="order-1">

                        <a href="/practice-info" className=" block w-56 lg:w-96 p-6  bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl transition ease-in-out delay-150 bg-walterWhite hover:-translate-y-1 hover:scale-110 hover:walterWhite duration-300 hover:bg-gray-100 ">
                            
                            <img src={Logo} className="block max-w-sm h-32  m-auto lg:h-64 bg-white border rounded-lg border-ronBurgundy" alt="Pink Brain" />
                            
                            <h5 className="mt-5 text-2xl font-luckiest tracking-tight text-ronBurgundy">Practice</h5>
                            <p className="font-normal text-ronBurgundy dark:text-gray-400">Get the feel for the question format and layout</p>
                        </a>


                    </div>
                    <div className="sm:order-first lg:order-2">

                        <a href="/category-selector" className="block w-56 lg:w-96 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl transition ease-in-out delay-150 bg-walterWhite hover:-translate-y-1 hover:scale-110 hover:walterWhite duration-300 hover:bg-gray-100 ">
                        <img src={Logo3} className="block max-w-sm h-32 m-auto my-8 lg:h-64 bg-white border rounded-lg border-ronBurgundy" alt="Pink Brain" />
                            <h5 className="mt-5 text-4xl font-luckiest tracking-tight text-ronBurgundy">Play Now</h5>
                            <p className="font-normal text-ronBurgundy dark:text-gray-400">Test your knowledge in the category of your choosing</p>
                        </a>


                    </div>
                    <div className="order-3">

                        <a href="/leaderboard" className="block w-56 lg:w-96 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl transition ease-in-out delay-150 bg-walterWhite hover:-translate-y-1 hover:scale-110 hover:walterWhite duration-300 hover:bg-gray-100 ">
                        <img src={Logo2} className="block max-w-sm h-32  m-auto lg:h-64 bg-white border rounded-lg border-ronBurgundy" alt="Pink Brain" />
                            <h5 className="mt-5 text-2xl font-luckiest tracking-tight text-ronBurgundy">Leaderboard</h5>
                            <p className="font-normal text-ronBurgundy dark:text-gray-400">See where you stand among the players in the Kwizzed community</p>
                        </a>


                    </div>
                </div>
            </div>

        </>
    )
}
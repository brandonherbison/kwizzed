import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllUsers } from "../../managers/UserManager"


export const Leaderboard = () => {

    const [players, setPlayers] = useState([])
    const [rankedPlayers, setRankedPlayers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllUsers().then(setPlayers)
    }, [])


    useEffect(() => {
        const eligiblePlayers = players.filter(player => player.response_count > 0 && player.user.is_active && player.user.is_staff === false)
        const rankedPlayers = eligiblePlayers.sort((a, b) => {
            return b.correct_response_count - a.correct_response_count
        })
        setRankedPlayers(rankedPlayers)
    }, [players])

    const correctPercentage = (player) => {
        return Math.round((player.correct_response_count / player.response_count) * 100)
    }



    return <>
        <div className="grid grid-cols-1 gap-3 w-5/12 m-auto -mt-40 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
            <h1 className="mb-2 text-4xl font-luckiest text-ronBurgundy text-center">Leaderboard</h1>
            {
                rankedPlayers.map((player) => {
                    return <div key={player.id} className="block grid grid-cols-6 gap-4 w-full p-6 bg-white border border-ronBurgundy rounded-lg shadow-md items-start">
                        <Link to={`/player/${player.id}/statistics`}>
                        <img className="w-20 h-18 max-w-20 max-h-18 col-span-1 rounded-full border border-2 border-ronBurgundy" src={player.profile_image_url} alt="avatar " />
                        </Link>
                        <div className="col-span-3">
                            <h5 className=" text-2xl font-luckiest tracking-tight text-ronBurgundy">{player.user.username}</h5>
                            <p className="font-normal text-ronBurgundy">Total Correct: {player.correct_response_count}</p>
                            <p className="font-normal text-ronBurgundy">% Correct: {correctPercentage(player)}</p>
                        </div>

                    </div>
                })
            }
            <button onClick={() => navigate(`/`)}
                type="button"
                className="justify-self-start text-white bg-ronBurgundy hover:bg-darkRonBurgundy font-medium rounded-full text-sm px-5 py-2.5">
                Back</button>
        </div>
    </>

}
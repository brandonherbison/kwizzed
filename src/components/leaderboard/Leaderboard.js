import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllUsers } from "../../managers/UserManager"


export const Leaderboard = () => {
    
    const [players, setPlayers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getAllUsers().then(setPlayers)
    }, [])

    const rankedPlayers = players.sort((a, b) => {
        return b.correct_response_count - a.correct_response_count
    })
    
    return <>
        <h1>Leaderboard</h1>
        {
            rankedPlayers.map((player) => {
                return<div key={player.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{player.user.username}</h5>
                    <p className="font-normal text-gray-700">Total Correct: {player.correct_response_count}</p>
                    <p className="font-normal text-gray-700">% Correct: {player.correct_response_count / player.response_count * 100}</p>

                </div>
            })
        }
        <button onClick={() => navigate(`/`)}
            type="button"
            className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Back</button>
    </>
}
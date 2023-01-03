import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetCorrectPlayerResponsesByCategory } from "../../managers/PlayerResponseManager"
import { getUserById } from "../../managers/UserManager"




export const PlayerStatistics = () => {

    const { playerId } = useParams()
    const [player, setPlayer] = useState({})

    const [correctScienceCount, setCorrectScienceCount] = useState(0)
    const [correctHistoryCount, setCorrectHistoryCount] = useState(0)
    const [correctGeographyCount, setCorrectGeographyCount] = useState(0)
    const [correctSportsCount, setCorrectSportsCount] = useState(0)
    const [correctEntertainmentCount, setCorrectEntertainmentCount] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        getUserById(playerId).then((data) => {
            setPlayer(data)
        })
    }, [])

    useEffect(() => {

        GetCorrectPlayerResponsesByCategory(playerId, 1).then((data) => {
            setCorrectScienceCount(data)
        })
        GetCorrectPlayerResponsesByCategory(playerId, 2).then((data) => {
            setCorrectHistoryCount(data)
        })
        GetCorrectPlayerResponsesByCategory(playerId, 3).then((data) => {
            setCorrectGeographyCount(data)
        })
        GetCorrectPlayerResponsesByCategory(playerId, 4).then((data) => {
            setCorrectSportsCount(data)
        })
        GetCorrectPlayerResponsesByCategory(playerId, 5).then((data) => {
            setCorrectEntertainmentCount(data)
        })


    }, [])



    return <>
        <div className="grid grid-cols-1 justify-items-center gap-2 w-1/5 m-auto -mt-40 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
            <h1>{player.username}</h1>
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={player.profile_image_url} alt="Avatar" />
            <h2 className="text-2xl font-luckiest text-ronBurgundy">{player?.user?.username}'s Statistics</h2>
            
                <h3 className="text-2xl font-luckiest text-ronBurgundy">Science: {correctScienceCount}</h3>
                <h3 className="text-2xl font-luckiest text-ronBurgundy">History: {correctHistoryCount}</h3>
                <h3 className="text-2xl font-luckiest text-ronBurgundy">Geography: {correctGeographyCount}</h3>
                <h3 className="text-2xl font-luckiest text-ronBurgundy">Sports: {correctSportsCount}</h3>
                <h3 className="text-2xl font-luckiest text-ronBurgundy">Entertainment: {correctEntertainmentCount}</h3>
            
            <p className="text-ronBurgundy text-center">**The figures above represent how many questions the player has answered correctly for each respective category.</p>
            <button className="justify-self-end text-white font-luckiest bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-full text-sm px-5 py-2.5 text-center hover:bg-darkRonBurgundy" 
            onClick={() => navigate('/leaderboard')}>
                Back
            </button>
        </div>
    </>
}
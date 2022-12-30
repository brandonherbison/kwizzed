import { useEffect, useState } from "react"
import { GetPlayerResponsesByPlayer } from "../../managers/PlayerResponseManager"



export const Results = ({ currentUserId }) => {

    const [playerResponses, setPlayerResponses] = useState([])

    const [open, setOpen] = useState(false)

    const showResults = () => {
        setOpen(!open)
    }

    useEffect(() => {
        GetPlayerResponsesByPlayer(currentUserId).then(setPlayerResponses)
    }, [])

    return <>
        <button className="font-luckiest text-ronBurgundy text-xl mt-2 " onClick={showResults}>{open ? "Hide Results" : "Show Results"}</button>
        {open ? <div className="grid grid-cols-1 divide-y divide-ronBurgundy gap-3 border border-r-0 border-l-0 border-ronBurgundy">
            {playerResponses.map((pr) => {
                return <div key={pr.id} className="">

                    {
                        pr.answer !== null
                            ? <>
                                <p className="text-2xl text-ronBurgundy">{pr.answer.question.question_text}</p>
                                <p className="text-xl italic text-ronBurgundy">Your Response: {pr.answer.answer_text}</p>
                                <p className={pr.answer.is_correct ? "text-green-400 text-xl" : "text-red-500 text-xl"}>{pr.answer.is_correct ? "Correct" : "Incorrect"}</p>
                            </>
                            : <p className="text-xl italic text-ronBurgundy">You missed a question here because you didn't answer in time!</p>
                    }

                </div>
            })}
        </div>
            : null}
    </>
}
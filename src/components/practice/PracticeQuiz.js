import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetPracticeQuestions } from "../../managers/QuestionManager"




export const PracticeQuiz = () => {

    const navigate = useNavigate()

    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
        GetPracticeQuestions().then(setQuestions)
    }, [])


    const answerClicked = () => {

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }


    return <>
        <div className="block w-11/12 lg:w-5/12 m-auto -mt-40 grid grid-cols-1 gap-4 p-8 bg-white border border-ronBurgundy rounded-lg shadow-xl">
            <h5 className="mb-2 text-lg tracking-tight text-ronBurgundy ">{currentQuestion + 1} of {questions.length}</h5>
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-ronBurgundy ">{questions[currentQuestion]?.question_text}</h5>
            <div className="grid grid-cols-1 gap-4">
                {
                    questions[currentQuestion]?.answers.map(answer => {
                        return <button key={answer.id} onClick={() => answerClicked()} className="block border border-ronBurgundy rounded-full w-full py-2 text-3xl text-ronBurgundy bg-pinkBrain hover:bg-ronBurgundy hover:text-pinkBrain transition ease-in-out delay-20
                        hover:-translate-y-1 hover:scale-105
                        duration-300">

                                {answer.answer_text}
                        </button>
                    }
                    )
                }
            </div>
            <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setCurrentQuestion(currentQuestion - 1)} className="text-white bg-ronBurgundy font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 hover:bg-darkRonBurgundy">
                Previous
            </button>
            <button onClick={() => navigate("/")} className="text-white bg-ronBurgundy font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 hover:bg-darkRonBurgundy">
                Home
            </button>
            </div>
        </div>
    </>
}
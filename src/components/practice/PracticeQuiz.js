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
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-lg tracking-tight text-gray-900 ">{currentQuestion + 1} of {questions.length}</h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{questions[currentQuestion]?.question_text}</h5>
            <ul>
                {
                    questions[currentQuestion]?.answers.map(answer => {
                        return <li key={answer.id}>
                            <a onClick={() => answerClicked()} className="block  py-2 text-sm text-gray-700 hover:bg-gray-100 divide-y divide-gray-100">
                                {answer.answer_text}
                            </a>
                        </li>
                    }
                    )
                }
            </ul>
            <button onClick={() => setCurrentQuestion(currentQuestion - 1)} className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Previous
            </button>
            <button onClick={() => navigate("/")} className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Home
            </button>
        </div>
    </>
}
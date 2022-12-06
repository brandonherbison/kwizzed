import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetQuestionsByCategory } from "../../managers/QuestionManager"



export const Quiz = ({ token }) => {

    const { categoryId } = useParams()
    const [questions, setQuestions] = useState([])
    const navigate = useNavigate()

    const [showResults, setResults] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
        GetQuestionsByCategory(categoryId).then(setQuestions)
    }, [])

    const answerClicked = (is_correct) => {

        if (is_correct) {
            setScore(score + 1)
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setResults(true)
        }
    }


    const questionsWithShuffledAnswers = questions[currentQuestion]?.answers.sort(() => Math.random() - 0.5)

    return <>

        {
            showResults
                ? <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Final Results</h5>
                    <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 ">{score} out of {questions.length} correct - {score / questions.length * 100}%</h5>
                    <button
                        onClick={() => navigate("/")}
                        type="button"
                        className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Finish</button>
                </div>
                : <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-lg tracking-tight text-gray-900 ">{currentQuestion + 1} of {questions.length}</h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{questions[currentQuestion]?.question_text}</h5>
                    <ul>
                        {
                            questionsWithShuffledAnswers?.map(answer => {
                                return <li key={answer.id}>
                                    <a onClick={() => answerClicked(answer.is_correct)} className="block  py-2 text-sm text-gray-700 hover:bg-gray-100 divide-y divide-gray-100">
                                        {answer.answer_text}
                                    </a>
                                </li>
                            }
                            )
                        }
                    </ul>
                </div>
        }



    </>
}
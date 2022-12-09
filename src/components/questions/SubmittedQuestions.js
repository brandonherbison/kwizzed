import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteQuestion, GetQuestions } from "../../managers/QuestionManager"



export const SubmittedQuestions = () => {
    const [questions, setQuestions] = useState([])

    const navigate = useNavigate()

    const setQuestionState = () => {
        GetQuestions().then(setQuestions)
    }

    useEffect(() => {
        setQuestionState()
    }, [])





    return <>
        <button
            onClick={() => navigate("/create-question")}
            type="button"
            className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Create</button>
        {
            questions.map(question => {
                return <div key={question.id} className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{question.question_text}</h5>
                    {
                        question.answers.map(answer => {
                            return <p key={answer.id} className="font-normal text-gray-700">{answer.answer_text} {answer.is_correct ? "(Correct Answer)" : ""}</p>
                        })
                    }
                    {
                        question.is_approved
                        ? "Your question has been approved!"
                        :  <>
                        <button
                        onClick={() => deleteQuestion(question.id).then(setQuestionState)}
                        type="button"
                        className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2.5 text-center mr-2 mb-2">
                        Delete</button>
                        <p>Your question is pending approval by an administrator. You may delete your question at this time.</p>
                        </>
                    }
                </div>

            })
        }
        
    </>
}
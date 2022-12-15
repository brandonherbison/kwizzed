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
        <div className="grid grid-cols-1 gap-3 w-2/5 m-auto -mt-40 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
            <h1 className="mb-2 text-4xl font-luckiest text-ronBurgundy text-center">Submitted Questions</h1>
            <button
                onClick={() => navigate("/create-question")}
                type="button"
                className="text-white bg-ronBurgundy justify-self-center w-2/5 font-luckiest rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 hover:bg-darkRonBurgundy">
                Create</button>
            {
                questions.map(question => {
                    return <div key={question.id} className="block w-full p-6 bg-white border border-ronBurgundy rounded-lg">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-ronBurgundy">{question.question_text}</h5>
                        <div>
                            {
                                question.answers.map(answer => {
                                    return <p key={answer.id} className="font-normal text-ronBurgundy">{answer.answer_text} {answer.is_correct ? "(Correct Answer)" : ""}</p>
                                })
                            }
                        </div>
                        <div>
                            {
                                question.is_approved
                                    ? <p className="mt-2 font-luckiest text-xl text-ronBurgundy">Your question has been approved!</p>
                                    : <>
                                        <p className="font-bold text-xl text-ronBurgundy">Your question is pending approval by an administrator. You may delete your question at this time.</p>
                                        <button
                                            onClick={() => deleteQuestion(question.id).then(setQuestionState)}
                                            type="button"
                                            className="text-white bg-ronBurgundy mt-2 font-medium rounded-full text-sm px-2 py-1 text-center mr-2 mb-2 hover:bg-darkRonBurgundy">
                                            Delete</button>
                                    </>
                            }
                        </div>
                    </div>

                })
            }
        </div>
    </>
}
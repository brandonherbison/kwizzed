import { useEffect, useState } from "react"
import { deleteQuestion, getUnapprovedQuestions, updateQuestion } from "../../managers/QuestionManager"
import { deleteReview, getAllReviews } from "../../managers/ReviewManager"
import { getAllUsers, updateUser } from "../../managers/UserManager"



export const AdminHome = () => {

    const [questions, setQuestions] = useState([])
    const [players, setPlayers] = useState([])
    const [reviews, setReviews] = useState([])


    const setUnapprovedQuestionsState = () => {
        getUnapprovedQuestions().then(setQuestions)
    }
    const setUserState = () => {
        getAllUsers().then(setPlayers)
    }
    const setReviewsState = () => {
        getAllReviews().then(setReviews)
    }

    useEffect(() => {
        setUnapprovedQuestionsState()
        setUserState()
        setReviewsState()
    }, [])

    const approveQuestion = (question) => {
        const updatedQuestion = {
            id: question.id,
            isApproved: true,
            difficultyLevel: question.difficulty_level,
            questionText: question.question_text,
            categoryId: question.category.id,
            isPractice: question.is_practice,
        }
        updateQuestion(updatedQuestion)
            .then(setUnapprovedQuestionsState)
    }
    const rejectQuestion = (question) => {
        deleteQuestion(question.id)
            .then(setUnapprovedQuestionsState)
    }

    const deactivateOrActivatePlayer = (player) => {
        const updatedPlayer = {
            id: player.id,
            username: player.user.username,
            profileImageUrl: player.profile_image_url,
            email: player.user.email,
            bio: player.bio,
            isActive: !player.user.is_active
        }
        updateUser(updatedPlayer)
            .then(setUserState)
    }

    const deletePlayerReview = (review) => {
        deleteReview(review.id)
            .then(setReviewsState)
    }

    return <>
        <h1>Admin Home</h1>
        <div href="/practice-info" className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-ronBurgundy">Question Proposals</h5>
            <ol>
                {questions.map(q => {
                    return <div key={q.id}>
                        <h3>Submitted by: {q.player.full_name}</h3>
                        <li >{q.question_text}
                            <ul>
                                {
                                    q.answers.map(a => {
                                        return <li key={a.id}>{a.answer_text} {a.is_correct ? "(Correct Answer)" : ""}</li>
                                    }
                                    )
                                }
                            </ul>
                            <button onClick={() => approveQuestion(q)} className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2.5 text-center mr-2 mb-2">
                                Approve
                            </button>
                            <button onClick={() => rejectQuestion(q)} className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2.5 text-center mr-2 mb-2">
                                Reject
                            </button>
                        </li>
                    </div>


                })}
            </ol>
        </div>
        <div href="/practice-info" className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-ronBurgundy">Players</h5>
            <ol>
                {players.map(p => {
                    return <li key={p.id}>{p.full_name}
                        <label className="inline-flex relative items-center cursor-pointer">
                            {
                                p.user.is_staff
                                    ? <span className="ml-3 text-sm font-medium text-gray-900">Admin</span>
                                    : <>
                                        <input onChange={() => deactivateOrActivatePlayer(p)} type="checkbox" checked={p.user.is_active ? true : false} className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-ronBurgundy"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900">Deactivate/Activate</span>
                                    </>
                            }
                        </label>
                    </li>
                })}
            </ol>
        </div>
        <div href="/practice-info" className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-ronBurgundy">Reviews</h5>
            <ol>
                {reviews.map(r => {
                    return <li key={r.id}>{r.body}
                        <button
                            onClick={() => deletePlayerReview(r)}
                            type="button"
                            className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  px-2.5 py-1 text-center mr-2 mb-2">
                            X</button>
                    </li>
                })}
            </ol>
        </div>
    </>
}
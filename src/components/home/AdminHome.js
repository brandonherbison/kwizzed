import { useEffect, useState } from "react"
import { deleteQuestion, getUnapprovedQuestions, updateQuestion } from "../../managers/QuestionManager"
import { deleteReview, getAllReviews } from "../../managers/ReviewManager"
import { getAllUsers, updateUser } from "../../managers/UserManager"
import Delete from "../../icons/delete.svg"
import Check from "../../icons/check.svg"
import { GetMostFrequentlyMissedQuestionByCategory, GetPlayerResponsesByCategory } from "../../managers/PlayerResponseManager"
import { CategoryCreator } from "./CategoryCreator"
import { QuestionContainer } from "../questions/QuestionContainer"
import { useNavigate } from "react-router-dom"




export const AdminHome = () => {

    const [questions, setQuestions] = useState([])
    const [players, setPlayers] = useState([])
    const [reviews, setReviews] = useState([])
    const [sciencePercentage, setSciencePercentage] = useState(0)
    const [historyPercentage, setHistoryPercentage] = useState(0)
    const [geographyPercentage, setGeographyPercentage] = useState(0)
    const [sportsPercentage, setSportsPercentage] = useState(0)
    const [entertainmentPercentage, setEntertainmentPercentage] = useState(0)
    const [scienceQuestion, setScienceQuestion] = useState({})
    const [historyQuestion, setHistoryQuestion] = useState({})
    const [geographyQuestion, setGeographyQuestion] = useState({})
    const [sportsQuestion, setSportsQuestion] = useState({})
    const [entertainmentQuestion, setEntertainmentQuestion] = useState({})

    const navigate = useNavigate()

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
        GetPlayerResponsesByCategory(1).then(setSciencePercentage)
        GetPlayerResponsesByCategory(2).then(setHistoryPercentage)
        GetPlayerResponsesByCategory(3).then(setGeographyPercentage)
        GetPlayerResponsesByCategory(4).then(setSportsPercentage)
        GetPlayerResponsesByCategory(5).then(setEntertainmentPercentage)
        GetMostFrequentlyMissedQuestionByCategory(1).then(setScienceQuestion)
        GetMostFrequentlyMissedQuestionByCategory(2).then(setHistoryQuestion)
        GetMostFrequentlyMissedQuestionByCategory(3).then(setGeographyQuestion)
        GetMostFrequentlyMissedQuestionByCategory(4).then(setSportsQuestion)
        GetMostFrequentlyMissedQuestionByCategory(5).then(setEntertainmentQuestion)
    }
    , [])


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

    const seeQuestionsButton = () => {
        navigate("/questions/category/categoryId")
    }

    return <>
        <div className="grid grid-cols-1 gap-3 w-3/5 m-auto -mt-16 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
            <h1 className="mb-2 text-4xl font-luckiest text-ronBurgundy text-center">Dashboard</h1>
            <div href="/practice-info" className=" block w-full p-6 bg-white border border-ronBurgundy rounded-lg shadow-md ">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-ronBurgundy">Question Proposals</h5>
                <ol className="divide-y divide-ronBurgundy">
                    {questions.map(q => {
                        return <div key={q.id} className="mt-3">
                            <li className="flex justify-between">
                                <ul>
                                    <h3 className="text-xl font-bold">Submitted by: {q.player.full_name}</h3>
                                    <p className="text-xl italic">{q.question_text}</p>
                                    {
                                        q.answers.map(a => {
                                            return <li key={a.id} className="text-md">{a.answer_text} {a.is_correct ? "(Correct Answer)" : ""}</li>
                                        }
                                        )
                                    }
                                </ul>
                                <div className="mt-2">
                                    <button onClick={() => approveQuestion(q)} className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 text-center mr-2 mb-2">
                                        <img src={Check} className="h-6 w-6"></img>
                                    </button>
                                    <button onClick={() => rejectQuestion(q)} className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-6 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 text-center mr-2 mb-2">
                                        <img src={Delete} className="h-6 w-6"></img>
                                    </button>
                                </div>
                            </li>
                        </div>


                    })}
                </ol>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div href="/practice-info" className=" block w-full p-6 bg-white border border-ronBurgundy rounded-lg shadow-md ">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-ronBurgundy">Players</h5>
                    <div className="grid grid-cols-1 gap-3 divide-y divide-ronBurgundy">
                        {players.map(p => {
                            return <div key={p.id} className="flex justify-between">
                                    <p>{p.user.is_staff ? null : p.full_name}</p>
                                    <label className="mt-1 inline-flex relative items-center cursor-pointer justify-self-end">
                                        {
                                            p.user.is_staff
                                                ? ""
                                                : <>
                                                    <input onChange={() => deactivateOrActivatePlayer(p)} type="checkbox" checked={p.user.is_active ? true : false} className="sr-only peer" />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-ronBurgundy"></div>
                                                    <span className="ml-3 text-sm font-medium text-gray-900">Deactivate/Activate</span>
                                                </>
                                        }
                                    </label>
                                </div>
                        })}
                    </div>
                </div>
                <div href="/practice-info" className=" block w-full p-6 bg-white border border-ronBurgundy rounded-lg shadow-md ">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-ronBurgundy">Reviews</h5>
                    <div className="grid grid-cols-1 gap-3 divide-y divide-ronBurgundy">
                        {reviews.map(r => {
                            return <div className="flex justify-between" key={r.id}>
                                    <p className="mt-2" >{r.body}</p>
                                    <button
                                        onClick={() => deletePlayerReview(r)}
                                        type="button"
                                        className=" text-white bg-ronBurgundy mt-2 font-medium rounded-full justify-self-end text-sm h-6 w-6 px-1 py-1 text-center">
                                        <img src={Delete} alt="delete" className="h-4 w-4"></img>
                                    </button>
                                </div>
                        })}
                    </div>
                </div>
                <div className="col-span-1 block w-full p-6 bg-white border border-ronBurgundy rounded-lg shadow-md">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-ronBurgundy">Category Analytics</h5>
                    <h2> The following represents the percentage of questions answered correctly across each individal category:</h2>
                        <div>
                            <p>Science: {sciencePercentage}%</p>
                            <p>History: {historyPercentage}%</p>
                            <p>Geography: {geographyPercentage}%</p>
                            <p>Sports: {sportsPercentage}%</p>
                            <p>Entertainment: {entertainmentPercentage}%</p>
                        </div>
                </div>
                <div className="col-span-1 block w-full p-6 bg-white border border-ronBurgundy rounded-lg shadow-md">
                <CategoryCreator/>
                </div>
                <div className="col-span-1 block w-full p-6 bg-white border border-ronBurgundy rounded-lg shadow-md">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-ronBurgundy">Question Analytics</h5>
                    <h2> The following represents the most frequently missed question from each category:</h2>
                        <div>
                            <div><p className="font-bold">Science:</p> <p className="italic">{scienceQuestion.question_text}</p> </div>
                            <div><p className="font-bold">History:</p> <p className="italic">{historyQuestion.question_text}</p></div>
                            <div><p className="font-bold">Geography:</p> <p className="italic">{geographyQuestion.question_text}</p></div>
                            <div><p className="font-bold">Sports:</p> <p className="italic">{sportsQuestion.question_text}</p></div>
                            <div><p className="font-bold">Entertainment:</p> <p className="italic">{entertainmentQuestion.question_text}</p></div>
                        </div>
                </div>
                <div className="col-span-1 block w-full p-6 bg-white border border-ronBurgundy rounded-lg shadow-md">
                    <QuestionContainer/>
                </div>
            </div>
        </div>
    </>
}
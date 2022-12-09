import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteReview, getAllReviews } from "../../managers/ReviewManager"
import { getCurrentUser } from "../../managers/UserManager"



export const ReviewList = () => {

    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState({ id: 0 })

    const setReviewState = () => {
        getAllReviews().then(setReviews)
    }

    useEffect(() => {
        setReviewState()
    }, [])

    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data.id)
        })
    }, [])

    return <>
        <button
            onClick={() => navigate("/create-review")}
            type="button"
            className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Create</button>
        {
            reviews.map(review => {
                return <div key={review.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{review.player.full_name}</h5>
                    <p className="font-normal text-gray-700">{review.body}</p>
                    {
                        review.player.id === currentUser
                            ? <button
                                onClick={() => deleteReview(review.id).then(setReviewState)}
                                type="button"
                                className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2.5 text-center mr-2 mb-2">
                                Delete</button>
                            : null
                    }

                </div>
            })
        }
    </>
}

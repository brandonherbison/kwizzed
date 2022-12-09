import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { createNewReview } from "../../managers/ReviewManager";
import { getCurrentUser } from "../../managers/UserManager";



export const CreateReview = () => {

    const [review, updateReview] = useState({
        body: ""
    })
    const [currentUser, setCurrentUser] = useState({ id: 0 })

    const navigate = useNavigate()

    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data.id)
        })
    }, [])

    const changeReviewState = (domEvent) => {
        const copy = { ...review };
        copy[domEvent.target.id] = domEvent.target.value;
        updateReview(copy);
    };

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        if (review.body === "") {
            window.alert("Please fill out all fields")
        }
        else {
            const newReview = {
                body: review.body,
                playerId: currentUser.id,
            }
            createNewReview(newReview)
                .then(() => navigate("/reviews"))
        }
    }

    return <>
        <h2>Create Review</h2>
        <form>
            <label className="block mb-2 text-sm font-medium text-gray-900">Write your review</label>
            <textarea onChange={changeReviewState} id="body" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            <button
                onClick={handleSaveButtonClick}
                type="button"
                className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Submit</button>
        </form>
    </>
}
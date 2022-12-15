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
        <form className="grid grid-cols-1 gap-3 w-2/5 m-auto -mt-40 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
            <label className="mb-2 text-sm font-luckiest text-3xl text-center text-ronBurgundy">How Was Your Gaming Experience?</label>
            <textarea onChange={changeReviewState} id="body" rows="4" placeholder="Write your review here" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 focus:ring-ronBurgundy focus:border-ronBurgundy rounded-lg border border-ronBurgundy"></textarea>
            <button
                onClick={handleSaveButtonClick}
                type="button"
                className="justify-self-end text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 hover:bg-darkRonBurgundy">
                Submit</button>
        </form>
    </>
}
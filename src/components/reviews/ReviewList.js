import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteReview, getAllReviews } from "../../managers/ReviewManager"
import { getCurrentUser } from "../../managers/UserManager"
import Logo from '/Users/brandonherbison/workspace/kwizzed/src/icons/delete.svg'



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
        <div className="grid grid-cols-1 gap-3 w-2/5 m-auto -mt-40 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
            <h5 className="mb-2 text-4xl font-luckiest text-ronBurgundy text-center">Game Reviews</h5>
            <button
                onClick={() => navigate("/create-review")}
                type="button"
                className="text-white bg-ronBurgundy justify-self-center font-luckiest rounded-full px-6 py-2.5 text-center hover:bg-darkRonBurgundy">
                Write a Review</button>
            {
                reviews.map(review => {
                    return <div key={review.id} className="block grid grid-cols-8 gap-4 w-full p-6 bg-white border border-ronBurgundy rounded-lg shadow-md items-start">
                        <img className="w-16 h-16  rounded-full border border-2 border-ronBurgundy" src={review.player.profile_image_url} alt="avatar" />
                        
                        <div className="col-span-6">
                            <h5 className="mb-2 text-3xl font-luckiest tracking-tight text-ronBurgundy ">{review.player.full_name}</h5>
                            <p className="font-bold text-ronBurgundy">{review.body}</p>
                        </div>
                        {
                            review.player.id === currentUser
                                ? <button
                                    onClick={() => deleteReview(review.id).then(setReviewState)}
                                    type="button"
                                    className=" text-white bg-ronBurgundy font-medium rounded-full text-sm px-2 py-2 text-center justify-self-end self-center hover:bg-darkRonBurgundy">
                                    <img src={Logo} alt="delete" className="h-6 w-6"></img></button>
                                : null
                        }
                        
                    </div>
                })
            }
        </div>
    </>
}

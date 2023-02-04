export const getAllReviews = () => {
    return fetch("https://dolphin-app-y6xgd.ondigitalocean.app/reviews", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}


export const createNewReview = (review) => {
    return fetch("https://dolphin-app-y6xgd.ondigitalocean.app/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(review)
    })
        .then(res => res.json())
}

export const deleteReview = (reviewId) => {
    return fetch(`https://dolphin-app-y6xgd.ondigitalocean.app/reviews/${reviewId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}
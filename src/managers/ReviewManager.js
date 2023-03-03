export const getAllReviews = () => {
    return fetch("http://https://seahorse-app-s7cvy.ondigitalocean.app/reviews", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}


export const createNewReview = (review) => {
    return fetch("http://https://seahorse-app-s7cvy.ondigitalocean.app/reviews", {
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
    return fetch(`http://https://seahorse-app-s7cvy.ondigitalocean.app/reviews/${reviewId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}
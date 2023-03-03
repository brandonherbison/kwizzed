export const GetQuestions = () => {
    return fetch("https://seahorse-app-s7cvy.ondigitalocean.app/questions", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetSingleQuestion = (question) => {
    return fetch(`https://seahorse-app-s7cvy.ondigitalocean.app/questions/${question.id}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetQuestionsByCategory = (categoryId) => {
    return fetch(`https://seahorse-app-s7cvy.ondigitalocean.app/questions?category=${categoryId}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetPracticeQuestions = () => {
    return fetch("https://seahorse-app-s7cvy.ondigitalocean.app/questions?practice=1", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}


export const CreateNewQuestion = (question) => {
    return fetch("https://seahorse-app-s7cvy.ondigitalocean.app/questions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(question)
    })
        .then(res => res.json())
}

export const deleteQuestion = (questionId) => {
    return fetch(`https://seahorse-app-s7cvy.ondigitalocean.app/questions/${questionId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}

export const updateQuestion = (question) => {
    return fetch(`https://seahorse-app-s7cvy.ondigitalocean.app/questions/${question.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(question)
    })
}

export const getUnapprovedQuestions = () => {
    return fetch("https://seahorse-app-s7cvy.ondigitalocean.app/questions?approved=False", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}
export const GetQuestions = () => {
    return fetch("http://localhost:8000/questions", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetSingleQuestion = (question) => {
    return fetch(`http://localhost:8000/questions/${question.id}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetQuestionsByCategory = (categoryId) => {
    return fetch(`http://localhost:8000/questions?category=${categoryId}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetPracticeQuestions = () => {
    return fetch("http://localhost:8000/questions?practice=1", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}
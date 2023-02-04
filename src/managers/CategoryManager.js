export const GetCategories = () => {
    return fetch("https://dolphin-app-y6xgd.ondigitalocean.app/categories", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetSingleCategory = (category) => {
    return fetch(`https://dolphin-app-y6xgd.ondigitalocean.app/categories/${category.id}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const CreateCategory = (category) => {
    return fetch("https://dolphin-app-y6xgd.ondigitalocean.app/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(category)
    }).then(res => res.json())
}
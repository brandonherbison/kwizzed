export const GetCategories = () => {
    return fetch("http://https://seahorse-app-s7cvy.ondigitalocean.app/categories", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetSingleCategory = (category) => {
    return fetch(`http://https://seahorse-app-s7cvy.ondigitalocean.app/categories/${category.id}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const CreateCategory = (category) => {
    return fetch("http://https://seahorse-app-s7cvy.ondigitalocean.app/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(category)
    }).then(res => res.json())
}
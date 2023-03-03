export const getAllUsers = () => {
    return fetch("http://https://seahorse-app-s7cvy.ondigitalocean.app/players", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}


export const updateUser = (user) => {
    return fetch(`http://https://seahorse-app-s7cvy.ondigitalocean.app/players/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(user)
    })
}

export const getCurrentUser = () => {
    return fetch("http://https://seahorse-app-s7cvy.ondigitalocean.app/players/current", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const getUserById = (id) => {
    return fetch(`http://https://seahorse-app-s7cvy.ondigitalocean.app/players/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
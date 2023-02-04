export const GetAllPlayerResponses = () => {
    return fetch("https://dolphin-app-y6xgd.ondigitalocean.app/playerresponses", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetSinglePlayerResponse = (playerResponse) => {
    return fetch(`https://dolphin-app-y6xgd.ondigitalocean.app/playerresponses/${playerResponse.id}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetPlayerResponsesByPlayer = (playerId) => {
    return fetch(`https://dolphin-app-y6xgd.ondigitalocean.app/playerresponses?player=${playerId}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

// create new player response
export const CreatePlayerResponse = (playerResponse) => {
    return fetch("https://dolphin-app-y6xgd.ondigitalocean.app/playerresponses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(playerResponse)
    }).then(res => res.json())
}

export const GetPlayerResponsesByCategory = (categoryId) => {
    return fetch(`https://dolphin-app-y6xgd.ondigitalocean.app/playerresponses?category=${categoryId}&correct`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetMostFrequentlyMissedQuestionByCategory = (categoryId) => {
    return fetch(`https://dolphin-app-y6xgd.ondigitalocean.app/playerresponses?category=${categoryId}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetCorrectPlayerResponsesByCategory = (playerId, categoryId ) => {
    return fetch(`https://dolphin-app-y6xgd.ondigitalocean.app/playerresponses?player=${playerId}&category=${categoryId}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}
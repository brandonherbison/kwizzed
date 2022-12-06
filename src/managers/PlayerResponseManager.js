export const GetAllPlayerResponses = () => {
    return fetch("http://localhost:8000/playerresponses", {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetSinglePlayerResponse = (playerResponse) => {
    return fetch(`http://localhost:8000/playerresponses/${playerResponse.id}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

export const GetPlayerResponsesByPlayer = (playerId) => {
    return fetch(`http://localhost:8000/playerresponses?player=${playerId}`, {
        headers: {        
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    }).then(res => res.json())
}

// create new player response
export const CreatePlayerResponse = (playerResponse) => {
    return fetch("http://localhost:8000/playerresponses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(playerResponse)
    }).then(res => res.json())
}
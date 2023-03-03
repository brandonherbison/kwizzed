export const CreateNewAnswer = (answer) => {
    return fetch("https://seahorse-app-s7cvy.ondigitalocean.app/answers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(answer)
    })
}
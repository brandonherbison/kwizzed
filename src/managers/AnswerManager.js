export const CreateNewAnswer = (answer) => {
    return fetch("http://localhost:8000/answers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(answer)
    })
}
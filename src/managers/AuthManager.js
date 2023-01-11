export const loginUser = (user) => {
  return fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "https://kwizzed-a3pup.ondigitalocean.app"
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password
    })
  }).then(res => res.json())
}

export const registerUser = (newUser) => {
  return fetch("http://localhost:8000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "https://kwizzed-a3pup.ondigitalocean.app"
    },
    body: JSON.stringify(newUser)
  }).then(res => res.json())
}

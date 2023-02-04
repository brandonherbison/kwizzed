export const loginUser = (user) => {
  return fetch("https://dolphin-app-y6xgd.ondigitalocean.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password
    })
  }).then(res => res.json())
}

export const registerUser = (newUser) => {
  return fetch("https://dolphin-app-y6xgd.ondigitalocean.app/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(newUser)
  }).then(res => res.json())
}

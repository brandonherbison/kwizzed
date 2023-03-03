export const loginUser = (user) => {
  return fetch("https://seahorse-app-s7cvy.ondigitalocean.app/login", {
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
  return fetch("https://seahorse-app-s7cvy.ondigitalocean.app/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(newUser)
  }).then(res => res.json())
}

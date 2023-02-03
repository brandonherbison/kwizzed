import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import BrainBulb from "../../designs/BrainBulb.png"


export const Login = ({ setToken }) => {
  const username = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const [isUnsuccessful, setisUnsuccessful] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    const user = {
      username: username.current.value,
      password: password.current.value
    }

    loginUser(user).then(res => {
      if ("valid" in res && res.valid) {
        setToken(res.token)
        navigate("/")
      }
      else {
        setisUnsuccessful(true)
      }
    })
  }

  return (
    <form className="grid grid-cols-1 justify-items-center lg:mt-48 sm:mt-20 gap-1 lg:w-1/5 sm:w-3/5 m-auto p-6 " onSubmit={handleLogin}>
      <img className="w-56 h-56" src={BrainBulb} alt="Brain" />
      <h1 className="font-luckiest text-4xl text-ronBurgundy">Kwizzed</h1>
      <h2 className="font-medium text-2xl -mt-3 text-ronBurgundy">Competitive Trivia</h2>

      <div className="w-full">
        <label className="justify-self-start text-ronBurgundy">Username</label>
        <input className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy" type="text" ref={username} />
      </div>
      <div className="w-full">
        <label className="justify-self-start text-ronBurgundy">Password</label>
        <input className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy" type="password" ref={password} />
      </div>

      <button className="justify-self-start text-white mt-1 bg-ronBurgundy rounded-full text-sm py-1 px-2  text-center mb-2 hover:bg-darkRonBurgundy" type="submit" >Login</button>
      <Link to={"/register"} className="text-ronBurgundy self-end hover:text-darkRonBurgundy hover:font-bold">Create an account</Link>

    </form>
  )
}

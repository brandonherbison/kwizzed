import { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"

export const Register = ({ setToken }) => {
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const username = useRef()
  const bio = useRef()
  const password = useRef()
  const verifyPassword = useRef()
  const profileImageURL = useRef()
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        bio: bio.current.value,
        is_staff: false,
        profile_image_url: profileImageURL.current.value
      }

      registerUser(newUser)
        .then(res => {
          if ("valid" in res && res.valid) {
            setToken(res.token)
            navigate("/")
          }
        })
    }
  }

  return (

    <form className="grid grid-cols-2 gap-3 w-2/5 m-auto mt-36 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite" onSubmit={handleRegister}>
      <h1 className="col-span-2 font-luckiest text-ronBurgundy text-3xl text-center">Register</h1>
      <div className="col-span-1">
        <label className="justify-self-start text-ronBurgundy">First Name</label>
        <input className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy" type="text" ref={firstName} />
      </div>

      <div className="col-span-1">
        <label className="justify-self-start text-ronBurgundy">Last Name</label>
        <input className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy" type="text" ref={lastName} />
      </div>

      <div className="col-span-1">
        <label className="justify-self-start text-ronBurgundy">Username</label>
        <input className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy" type="text" ref={username} />
      </div>

      <div className="col-span-1">
        <label className="justify-self-start text-ronBurgundy">Email</label>
        <input className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy" type="email" ref={email} />
      </div>

      <div className="col-span-2">
        <label className="justify-self-start text-ronBurgundy">Password</label>
        <input className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy" type="password" ref={password} />
      </div>


      <div className="col-span-2">
      <label className="justify-self-start text-ronBurgundy">Verify Password</label>
            <input className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy" type="password" ref={verifyPassword} />
      </div>

      <div className="col-span-2">
        <label className="justify-self-start text-ronBurgundy">Profile Image URL</label>
          <input className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy placeholder-ronBurgundy" type="text" placeholder="Image URL" ref={profileImageURL} />
      </div>

      <div className="col-span-2">
        <label className="justify-self-start text-ronBurgundy">Bio</label>
          <textarea className="w-full rounded-lg border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy placeholder-ronBurgundy" placeholder="Tell us about yourself..." ref={bio}></textarea>
      </div>

      <div className="col-span-2 flex justify-between">
          <Link to="/login" className="font-bold text-ronBurgundy hover:text-darkRonBurgundy">Back to Login</Link>
          <button className="font-bold text-ronBurgundy hover:text-darkRonBurgundy" type="submit">Submit</button>
      </div>

    </form>

  )
}

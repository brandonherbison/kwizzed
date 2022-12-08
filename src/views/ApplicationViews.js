import { Route, Routes } from "react-router-dom"
import { Register } from "../components/auth/Register"
import { Login } from "../components/auth/Login"
import { Authorized } from "./Authorized"
import { Home } from "../components/Home"
import { CategorySelector } from "../components/play-now/CategorySelector"
import { Quiz } from "../components/play-now/Quiz"
import { PracticeInfo } from "../components/practice/PracticeInfo"
import { PracticeQuiz } from "../components/practice/PracticeQuiz"
import { NavBar } from "../components/nav/NavBar"
import { Profile } from "../components/profile/Profile"
import { UpdateProfile } from "../components/profile/UpdateProfile"
import { SubmittedQuestions } from "../components/questions/SubmittedQuestions"
import { CreateQuestion } from "../components/questions/CreateQuestion"




export const ApplicationViews = ({ token, setToken, loggedInUser }) => {
    return <>
        {
            token
            ? <NavBar token={token} setToken={setToken} loggedInUser={loggedInUser}></NavBar>
            : null
        }
        <Routes>
        
            <Route path="/" element={<Home />} token={token} />
            <Route path="/login" element={<Login setToken={setToken}/>} />
            <Route path="/register" element={<Register setToken={setToken} />} />
            <Route element={<Authorized token={token} />} />
            <Route path="/category-selector" element={<CategorySelector token={token} />} />
            <Route path="/play-now/:categoryId" element={<Quiz token={token} loggedInUser={loggedInUser} />} />
            <Route path="/practice-info" element={<PracticeInfo token={token} />} />
            <Route path="/practice-quiz" element={<PracticeQuiz token={token} />} />
            <Route path="/profile" element={<Profile token={token} loggedInUser={loggedInUser}/>} />
            <Route path="/update-profile" element={<UpdateProfile token={token} loggedInUser={loggedInUser}/>} />
            <Route path="/submitted-questions" element={<SubmittedQuestions token={token} loggedInUser={loggedInUser}/>} />
            <Route path="/create-question" element={<CreateQuestion token={token} loggedInUser={loggedInUser}/>} />


        </Routes>
    </>
}
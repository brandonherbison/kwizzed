import { Route, Routes } from "react-router-dom"
import { Register } from "../components/auth/Register"
import { Login } from "../components/auth/Login"
import { Authorized } from "./Authorized"
import { Home } from "../components/Home"
import { CategorySelector } from "../components/play-now/CategorySelector"
import { Quiz } from "../components/play-now/Quiz"
import { PracticeInfo } from "../components/practice/PracticeInfo"
import { PracticeQuiz } from "../components/practice/PracticeQuiz"




export const ApplicationViews = ({ token, setToken }) => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} token={token} />
            <Route path="/login" element={<Login setToken={setToken}/>} />
            <Route path="/register" element={<Register setToken={setToken} />} />
            <Route element={<Authorized token={token} />} />
            <Route path="/category-selector" element={<CategorySelector token={token} />} />
            <Route path="/play-now/:categoryId" element={<Quiz token={token} />} />
            <Route path="/practice-info" element={<PracticeInfo token={token} />} />
            <Route path="/practice-quiz" element={<PracticeQuiz token={token} />} />


        </Routes>
    </>
}
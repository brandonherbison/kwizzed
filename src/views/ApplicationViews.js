import { Route, Routes } from "react-router-dom"
import { Register } from "../components/auth/Register"
import { Login } from "../components/auth/Login"
import { Authorized } from "./Authorized"
import { CategorySelector } from "../components/play-now/CategorySelector"
import { Quiz } from "../components/play-now/Quiz"
import { PracticeInfo } from "../components/practice/PracticeInfo"
import { PracticeQuiz } from "../components/practice/PracticeQuiz"
import { NavBar } from "../components/nav/NavBar"
import { Profile } from "../components/profile/Profile"
import { UpdateProfile } from "../components/profile/UpdateProfile"
import { SubmittedQuestions } from "../components/questions/SubmittedQuestions"
import { CreateQuestion } from "../components/questions/CreateQuestion"
import { ReviewList } from "../components/reviews/ReviewList"
import { CreateReview } from "../components/reviews/CreateReview"
import { HomeContainer } from "../components/home/HomeConatainer"




export const ApplicationViews = ({ token, setToken }) => {
    return <>
        {
            token
            ? <NavBar token={token} setToken={setToken}></NavBar>
            : null
        }
        <Routes>
        
            <Route path="/" element={<HomeContainer />} />
            <Route path="/login" element={<Login setToken={setToken}/>} />
            <Route path="/register" element={<Register setToken={setToken} />} />
            <Route element={<Authorized token={token} />} />
            <Route path="/category-selector" element={<CategorySelector />} />
            <Route path="/play-now/:categoryId" element={<Quiz />} />
            <Route path="/practice-info" element={<PracticeInfo />} />
            <Route path="/practice-quiz" element={<PracticeQuiz />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/update-profile" element={<UpdateProfile/>} />
            <Route path="/submitted-questions" element={<SubmittedQuestions/>} />
            <Route path="/create-question" element={<CreateQuestion/>} />
            <Route path="/reviews" element={<ReviewList/>} />
            <Route path="/create-review" element={<CreateReview/>} />

        </Routes>
    </>
}
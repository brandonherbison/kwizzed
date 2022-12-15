import { useNavigate } from "react-router-dom"


export const PracticeInfo = () => {
    const navigate = useNavigate()
    return <>
    <div className="grid grid-cols-1 gap-3 w-1/5 m-auto -mt-40 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
        <p className="mb-2 text-lg tracking-tight text-gray-900">
        Take time to familarize yourself with the structure of the questions. You are free to take the practice quiz as many times as you like! Good luck.
        </p>
        <button onClick={() => navigate("/practice-quiz")} className=" text-white bg-ronBurgundy justify-self-center font-medium rounded-full text-sm px-5 py-2.5 text-center hover:bg-darkRonBurgundy">
            Begin
        </button>
    </div>
    </>
}
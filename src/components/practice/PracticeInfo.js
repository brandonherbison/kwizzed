import { useNavigate } from "react-router-dom"


export const PracticeInfo = () => {
    const navigate = useNavigate()
    return <>
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="mb-2 text-lg tracking-tight text-gray-900">
        Take time to familarize yourself with the structure of the questions. You are free to take the practice quiz as many times as you like! Good luck.
        </div>
        <button onClick={() => navigate("/practice-quiz")} className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Begin
        </button>
    </div>
    </>
}
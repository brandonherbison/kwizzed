import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { CreatePlayerResponse } from "../../managers/PlayerResponseManager"
import { GetQuestionsByCategory } from "../../managers/QuestionManager"
import { getCurrentUser } from "../../managers/UserManager"
import { Results } from "./Results"
import Star from "/Users/brandonherbison/workspace/kwizzed/src/icons/star.svg"





export const Quiz = () => {

    const [currentUser, setCurrentUser] = useState({})
    const { categoryId } = useParams()
    const [questions, setQuestions] = useState([])
    const navigate = useNavigate()

    const [showResults, setResults] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState("")
    const [shuffledAnswers, setShuffledAnswers] = useState([])
    const [helpButtonPressed, setHelpButtonPressed] = useState(false)
    const [helpCount, setHelpCount] = useState(0)

    const timer = useRef('')
    const [seconds, setSeconds] = useState(15)
    
    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])
    
    useEffect(() => {
        GetQuestionsByCategory(categoryId).then(setQuestions).then(() => { setCurrentQuestion(0) })
    }, [])
    
    useEffect(() => {
        if (questions.length > 0) {
            const shuffledAnswers = questions[currentQuestion].answers.sort(() => Math.random() - 0.5)
            setShuffledAnswers(shuffledAnswers)
        }
        
    }, [currentQuestion])

    useEffect(() => {
        if (helpButtonPressed) {
            setHelpCount(helpCount + 1)
            const answers = []
            const correctAnswer = shuffledAnswers.find(answer => answer.is_correct)
            answers.push(correctAnswer)
            const incorrectAnswers = shuffledAnswers.filter(answer => !answer.is_correct)
            answers.push(incorrectAnswers[0])
            const newShuffledAnswers = answers.sort(() => Math.random() - 0.5)

            setShuffledAnswers(newShuffledAnswers)
        }
    }, [helpButtonPressed])

    useEffect(() => {
        startTimer()
    }, [])

    useEffect(() => {

        if (seconds === 0) { 
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1)
                setHelpButtonPressed(false)
                CreatePlayerResponse({
                    playerId: currentUser.id,
                    answerId: null
                })
                resetTimer()
            } else {
                setResults(true)
                stopTimer()
            }
        }

    }, [seconds])

    const startTimer = () => {
        timer.current = setInterval(() => {
            setSeconds(seconds => seconds - 1)
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timer.current)
        timer.current = 0
    }

    const resetTimer = () => {
        stopTimer()
        setSeconds(15)
        startTimer()
    }

    const answerClicked = (answer) => {

        if (answer.is_correct) {
            setScore(score + 1)
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            setHelpButtonPressed(false)
        } else {
            setResults(true)
        }

        CreatePlayerResponse({
            playerId: currentUser.id,
            answerId: answer.id,
        })

        resetTimer()
    }



    return <>

        {
            showResults
                ? <>
                    <div className="block w-4/12 m-auto -mt-40 mb-10 grid grid-cols-1 gap-4 p-8 bg-white border border-ronBurgundy rounded-lg shadow-xl">
                        <h5 className="mb-2 text-4xl font-luckiest text-ronBurgundy text-center">Final Results</h5>
                        <h5 className="mb-2 text-3xl font-luckiest tracking-tight text-ronBurgundy text-center ">{score} out of {questions.length} correct - {score / questions.length * 100}%</h5>
                        <button
                            onClick={() => navigate("/category-selector")}
                            type="button"
                            className="text-white bg-ronBurgundy w-40 justify-self-center font-luckiest rounded-full text-lg px-5 py-2.5 text-center hover:bg-darkRonBurgundy">
                            Play Again</button>
                        <button
                            onClick={() => navigate("/create-review")}
                            type="button"
                            className="  text-ronBurgundy border border-ronBurgundy font-luckiest text-3xl w-1/2 rounded-lg text-sm px-5 py-2.5 text-center justify-self-center shadow-lg transition ease-in-out delay-20
                        hover:-translate-y-1 hover:scale-105
                        duration-300">
                            Leave a Review
                            <div className="grid grid-cols-5 m-auto justify-items-center">
                                <img src={Star} className="w-10 h-10"></img>
                                <img src={Star} className="w-10 h-10"></img>
                                <img src={Star} className="w-10 h-10"></img>
                                <img src={Star} className="w-10 h-10"></img>
                                <img src={Star} className="w-10 h-10"></img>
                            </div>
                        </button>
                    < Results currentUserId={currentUser.id}/>
                    </div>
                </>
                : <div className="block max-w-2xl m-auto -mt-40 grid grid-cols-1 gap-4 p-8 bg-white border border-ronBurgundy rounded-lg shadow-xl">
                    <div className="flex justify-between">
                        <h5 className="mb-2 text-lg tracking-tight text-ronBurgundy ">{currentQuestion + 1} of {questions.length}</h5>
                        <h5 className="mb-2 text-2xl text-ronBurgundy "> Time Remaining: {seconds}</h5>
                    </div>
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-ronBurgundy  ">{questions[currentQuestion]?.question_text}</h5>
                    <div className="grid grid-cols-1 gap-4">
                        {
                            shuffledAnswers.map(answer => {
                                return <button key={answer.id} onClick={() => answerClicked(answer)} className="block border border-ronBurgundy rounded-full w-full py-2 text-3xl text-ronBurgundy bg-pinkBrain hover:bg-ronBurgundy hover:text-pinkBrain transition ease-in-out delay-20
                                hover:-translate-y-1 hover:scale-105
                                duration-300">
                                    {answer.answer_text}
                                </button>

                            }
                            )
                        }
                    </div>
                    <button onClick={() => setHelpButtonPressed(true)} className={helpCount < 3?"justify-self-end text-ronBurgundy text-xl": "hidden"}>
                        I'm Stuck!
                    </button>
                </div>
        }



    </>
}
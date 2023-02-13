import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CreateNewAnswer } from "../../managers/AnswerManager"
import { GetCategories } from "../../managers/CategoryManager"
import { CreateNewQuestion, GetQuestions } from "../../managers/QuestionManager"
import { getCurrentUser } from "../../managers/UserManager"
import { AdminCreateQuestion } from "./AdminCreateQuestion"
import { PlayerCreateQuestion } from "./PlayerCreateQuestion"




export const QuestionContainer = () => {
    const initialQuestionState = {
        questionText: "",
        categoryId: 0,
        difficultyLevel: "",
    }

    const [question, updateQuestion] = useState(initialQuestionState)

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState({})

    const [categories, setCategories] = useState([])

    const [answers, setAnswers] = useState({})




    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data)
        })
        GetCategories().then(setCategories)
    }, [])


    const changeQuestionState = (domEvent) => {
        const copy = { ...question };
        copy[domEvent.target.id] = domEvent.target.value;
        updateQuestion(copy);
    };

    const changeAnswerState = (domEvent) => {
        const copy = { ...answers };
        copy[domEvent.target.id] = domEvent.target.value;
        if (domEvent.target.value !== "") {
            setAnswers(copy)

        }
        else {
            delete copy[domEvent.target.id];
            setAnswers(copy)
        }
    };

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        if (question.questionText === "" || question.categoryId === 0 || question.difficultyLevel === "") {
            window.alert("Please fill out all fields")
        }
        else if (answers[1] === "" || answers[2] === "" || answers[3] === "" || answers[4] === "") {
            window.alert("Please enter 4 answers")
        }
        else {
            const newQuestion = {
                questionText: question.questionText,
                categoryId: parseInt(question.categoryId),
                difficultyLevel: question.difficultyLevel,
                playerId: currentUser.id
            }
            const promiseArray = []
            CreateNewQuestion(newQuestion).then((newQuestion) => {
                const answerArray = Object.values(answers)

                answerArray.forEach((answer, idx) => {
                    const newAnswer = {
                        answerText: answer,
                        isCorrect: idx === 0 ? true : false,
                        questionId: newQuestion.id
                    }
                    promiseArray.push(CreateNewAnswer(newAnswer))
                })
            },
                Promise.all(promiseArray).then(() => {
                    window.alert("Question and Answers successfully created")
                    if (!currentUser.isStaff) {
                        navigate("/submitted-questions")
                    }
                    else {
                        updateQuestion(initialQuestionState)
                        setAnswers({})
                        document.getElementById("form").reset()
                    }

                }
                )
            )
        }
    }



    if (currentUser.isStaff) {
        return <AdminCreateQuestion
            categories={categories}
            handleSaveButtonClick={handleSaveButtonClick}
            changeQuestionState={changeQuestionState}
            changeAnswerState={changeAnswerState}
            setAnswers={setAnswers}
            updateQuestion={updateQuestion}
            question={question}
            answers={answers} />


    }
    else {
        return <PlayerCreateQuestion
            categories={categories}
            handleSaveButtonClick={handleSaveButtonClick}
            changeQuestionState={changeQuestionState}
            changeAnswerState={changeAnswerState}
        />
    }
}

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CreateNewAnswer } from "../../managers/AnswerManager"
import { GetCategories } from "../../managers/CategoryManager"
import { CreateNewQuestion } from "../../managers/QuestionManager"
import { getCurrentUser } from "../../managers/UserManager"




export const CreateQuestion = () => {

    const [question, updateQuestion] = useState({
        questionText: "",
        categoryId: 0,
        difficultyLevel: "",
    })

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState({ id: 0 })

    const [categories, setCategories] = useState([])

    const [answers, setAnswers] = useState({})



    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data.id)
        })
    }, [])

    useEffect(() => {
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
        else if (Object.keys(answers).length < 2) {
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

                answerArray.forEach((answer, key) => {
                    const newAnswer = {
                        answerText: answer,
                        isCorrect: key === 0 ? true : false,
                        questionId: newQuestion.id
                    }
                    promiseArray.push(CreateNewAnswer(newAnswer))
                })
            },
                Promise.all([promiseArray]
                ).then(function (responses) {
                    // Get a JSON object from each of the responses
                    return Promise.all(responses.map(function (response) {
                        return response.json();
                    }));
                }).then(function (data) {
                    // Log the data to the console
                    // You would do something with both sets of data here
                    console.log(data);
                }).catch(function (error) {
                    // if there's an error, log it
                    console.log(error);
                })
                    .then(() => {
                        navigate("/submitted-questions")
                    })
            )
        }
    }



    return <>
        <h1 className="text-2xl font-bold text-gray-900">Create Question</h1>
        <form>
            <label className="block mb-2 text-sm font-medium text-gray-900">Question Body</label>
            <textarea onChange={changeQuestionState} id="questionText" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>


            <label className="block mb-2 text-sm font-medium text-gray-900 ">Difficulty Level</label>
            <select onChange={changeQuestionState} id="difficultyLevel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value={0}>Select...</option>
                <option >easy</option>
                <option >medium</option>
                <option >hard</option>

            </select>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Select Category</label>
            <select onChange={changeQuestionState} id="categoryId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value={0}>Select...</option>
                {
                    categories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)
                }

            </select>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Answer Option 1 (Correct Answer)</label>
                <input onChange={changeAnswerState} type="text" id={1} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Answer Option 2</label>
                <input onChange={changeAnswerState} type="text" id={2} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Answer Option 3</label>
                <input onChange={changeAnswerState} type="text" id={3} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Answer Option 4</label>
                <input onChange={changeAnswerState} type="text" id={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <button
                onClick={handleSaveButtonClick}
                type="button"
                className="text-white bg-ronBurgundy hover:ronBurgundy-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Submit</button>
        </form>

    </>
}



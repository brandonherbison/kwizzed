


export const AdminCreateQuestion = ({ categories, handleSaveButtonClick, changeAnswerState, changeQuestionState, question, answers }) => {

    
    return<>
    <form className="grid grid-cols-1 gap-1 m-auto">
            <h1 className="text-3xl font-bold text-ronBurgundy">Create Question</h1>
            <label className="block mb-2 text-sm font-medium ">Question Body</label>
            <textarea onChange={changeQuestionState} id="questionText"  value={question.questionText} rows="4" placeholder="Enter Question Here" className=" block p-2.5 w-full focus:ring-ronBurgundy focus:border-ronBurgundy text-sm  bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>


            <label className="block mb-2 text-sm font-medium  ">Difficulty Level</label>
            <select onChange={changeQuestionState} id="difficultyLevel" value={question.difficultyLevel} className="bg-gray-50 focus:ring-ronBurgundy focus:border-ronBurgundy  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value={0}>Select...</option>
                <option >easy</option>
                <option >medium</option>
                <option >hard</option>

            </select>
            <label className="block mb-2 text-sm font-medium  ">Select Category</label>
            <select onChange={changeQuestionState} id="categoryId" value={question.categoryId} className="bg-gray-50 focus:ring-ronBurgundy focus:border-ronBurgundy  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value={0}>Select...</option>
                {
                    categories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)
                }

            </select>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium  ">Answer Option 1 (Correct Answer)</label>
                <input onChange={changeAnswerState} type="text" id={1} value={answers[1]} placeholder="Enter Answer Here" className=" bg-gray-50 focus:ring-ronBurgundy focus:border-ronBurgundy  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium  ">Answer Option 2</label>
                <input onChange={changeAnswerState} type="text" id={2} value={answers[2]} placeholder="Enter Answer Here" className=" bg-gray-50 focus:ring-ronBurgundy focus:border-ronBurgundy  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium  ">Answer Option 3</label>
                <input onChange={changeAnswerState} type="text" id={3} value={answers[3]} placeholder="Enter Answer Here" className=" bg-gray-50 focus:ring-ronBurgundy focus:border-ronBurgundy  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium  ">Answer Option 4</label>
                <input onChange={changeAnswerState} type="text" id={4} value={answers[4]} placeholder="Enter Answer Here" className=" bg-gray-50 focus:ring-ronBurgundy focus:border-ronBurgundy  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <button
                onClick={handleSaveButtonClick}
                type="button"
                className="text-white bg-ronBurgundy justify-self-end font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-darkRonBurgundy">
                Submit</button>
        </form>
    </>
}
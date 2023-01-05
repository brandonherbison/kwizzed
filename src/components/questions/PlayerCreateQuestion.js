


export const PlayerCreateQuestion = ({ categories, handleSaveButtonClick, changeAnswerState, changeQuestionState }) => {

    

    return<>
    <form className="grid grid-cols-1 gap-3 w-2/5 m-auto -mt-40 mb-10 p-6 bg-white border border-ronBurgundy border-2 rounded-lg shadow-xl bg-walterWhite">
            <h1 className="text-4xl font-luckiest text-center text-ronBurgundy">Create Question</h1>
            <label className="block mb-2 text-sm font-medium text-ronBurgundy">Question Body</label>
            <textarea onChange={changeQuestionState} id="questionText" rows="4" placeholder="Enter Question Here" className="placeholder-ronBurgundy block p-2.5 w-full focus:ring-ronBurgundy focus:border-ronBurgundy text-sm text-ronBurgundy bg-gray-50 rounded-lg border border-ronBurgundy focus:ring-blue-500 focus:border-blue-500"></textarea>


            <label className="block mb-2 text-sm font-medium text-ronBurgundy ">Difficulty Level</label>
            <select onChange={changeQuestionState} id="difficultyLevel" className="bg-gray-50 border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy text-ronBurgundy text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value={0}>Select...</option>
                <option >easy</option>
                <option >medium</option>
                <option >hard</option>

            </select>
            <label className="block mb-2 text-sm font-medium text-ronBurgundy ">Select Category</label>
            <select onChange={changeQuestionState} id="categoryId" className="bg-gray-50 border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy text-ronBurgundy text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value={0}>Select...</option>
                {
                    categories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)
                }

            </select>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-ronBurgundy ">Answer Option 1 (Correct Answer)</label>
                <input onChange={changeAnswerState} type="text" id={1} placeholder="Enter Answer Here" className="placeholder-ronBurgundy bg-gray-50 border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy text-ronBurgundy text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-ronBurgundy ">Answer Option 2</label>
                <input onChange={changeAnswerState} type="text" id={2} placeholder="Enter Answer Here" className="placeholder-ronBurgundy bg-gray-50 border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy text-ronBurgundy text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-ronBurgundy ">Answer Option 3</label>
                <input onChange={changeAnswerState} type="text" id={3} placeholder="Enter Answer Here" className="placeholder-ronBurgundy bg-gray-50 border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy text-ronBurgundy text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-ronBurgundy ">Answer Option 4</label>
                <input onChange={changeAnswerState} type="text" id={4} placeholder="Enter Answer Here" className="placeholder-ronBurgundy bg-gray-50 border border-ronBurgundy focus:ring-ronBurgundy focus:border-ronBurgundy text-ronBurgundy text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

            </div>
            <button
                onClick={handleSaveButtonClick}
                type="button"
                className="text-white bg-ronBurgundy justify-self-end font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-darkRonBurgundy">
                Submit</button>
        </form>
    </>
}
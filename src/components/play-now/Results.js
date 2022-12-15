


export const Results = ({ questions }) => {
    return <>
        {questions.map(question => {
            return <div className="results__question">
                <div className="results__question__question">
                    {question.question_text}
                </div>
                <div>
                    {question.answers.map(answer => {
                        return <div>
                            {answer.answer_text} {answer.is_correct ? "Correct" : ""}
                        </div>
                    })}
                </div>

            </div>
        })}
    </>
}
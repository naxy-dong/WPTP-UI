
export default function Question({ number, content, prompt, answerChoices }) {
    return (
        <>
            <div>Question {number}:</div>
            <div>{content}</div>
            <div>{prompt}</div>
            {
                answerChoices.map(choice => (
                    <div key={choice.letter} className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3">
                        <label className="options">{choice.text}
                            <input type="radio" name="radio" />
                            <span className="checkmark">{choice.letter.toUpperCase()}</span>
                        </label>  
                    </div>
                ))
            }
        </>
    )
}
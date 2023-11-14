export default function Question({ number, content, prompt, answerChoices, selectedOption, onOptionChange }) {
    const handleOptionChange = (choice) => {
        console.log(choice.letter);
        onOptionChange(choice.letter);
    };

    return (
        <>
            <h4>Question {number}:</h4>
            <div>{content}</div>
            <br />
            <div>{prompt}</div>
            {
                answerChoices.map(choice => (
                    <div key={choice.letter} className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3">
                        <label className="options">
                            {choice.text}
                            <input
                                type="radio"
                                name="radio"
                                checked={selectedOption === choice.letter}
                                onChange={() => handleOptionChange(choice)}
                            />
                            <span className="checkmark">{choice.letter.toUpperCase()}</span>
                        </label>
                    </div>
                ))
            }
        </>
    )
}
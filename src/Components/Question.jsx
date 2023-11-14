
export default function Question({ number, content, prompt, answerChoices }) {
    return (
        <>
            <div>Question {number}:</div>
            <div>{content}</div>
            <div>{prompt}</div>
            {
                answerChoices.map(choice => (
                    <div key={choice.letter}>
                        <span>{choice.letter}: </span>
                        <span>{choice.text}</span>
                    </div>
                ))
            }
        </>
    )
}
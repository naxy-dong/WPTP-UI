import { useState } from 'react';
import BottomNavbar from './BottomNavbar';
import Question from './Question'
import SectionHeader from './SectionHeader';
import questionModel from '../questionModel';

export default function ViewRandomQuestion() {
    const [count, setCount] = useState(0);
    const nextQuestion = () => {
        setCount((count) => Math.min(count + 1, questionModel.length - 1));
    }

    const question = questionModel[count];
    return (
        <>
            <h2>Welcome to the View Random Question page</h2>
            <Question number={count + 1} content={question.content} prompt={question.prompt} answerChoices={question.answerChoices} />
            <BottomNavbar nextClickFunc={nextQuestion} renderHomeBtn={count + 1 === questionModel.length}/>
        </>
    )
}
import { useState } from 'react';
import BottomNavbar from './BottomNavbar';
import Question from './Question'
import SectionHeader from './SectionHeader';
import questionModel from '../questionModel';

export default function SAT() {
    const [count, setCount] = useState(0);
    const nextQuestion = () => {
        setCount((count) => count + 1);
    }

    const question = questionModel[count];

    return (
        <>
            <h2>Welcome to the SAT page</h2>
            <SectionHeader sectionNumber={1} title="Reading and writing" />
            <Question number={count + 1} content={question.content} prompt={question.prompt} answerChoices={question.answerChoices} />
            <BottomNavbar clickFunc={nextQuestion} />
        </>
    )
}
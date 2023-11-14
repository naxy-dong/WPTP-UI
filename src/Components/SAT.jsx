import { useState } from 'react';
import BottomNavbar from './BottomNavbar';
import Question from './Question'
import SectionHeader from './SectionHeader';
import questionModel from '../questionModel';

export default function SAT() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const question = questionModel[count];

    const nextQuestion = () => {
        if (selectedOption !== null){
            console.log(selectedOption);
            setCount((count) => count + 1);
            setSelectedOption(null);
        }
    }

    return (
        <>
            <h2>Welcome to the SAT page</h2>
            <SectionHeader sectionNumber={1} title="Reading and writing" />
            <Question
                number={count + 1}
                content={question.content}
                prompt={question.prompt}
                answerChoices={question.answerChoices}
                selectedOption={selectedOption}
                onOptionChange={setSelectedOption}
            />
            <BottomNavbar nextClickFunc={nextQuestion} renderHomeBtn={count + 1 === questionModel.length} />
        </>
    )
}
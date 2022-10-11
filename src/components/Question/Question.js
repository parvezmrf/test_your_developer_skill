import React from 'react';
import Option from '../Option/Option';
import './Question.css';

const Question = ({ questions }) => {
    console.log(questions)
    const { question, correctAnswer, options } = questions;

    return (
        <div className='quiz-div' >
            <div className='qus-eye' >
                <h2 className='quiz-question'>{question.replace(/(<([^>]+)>)/ig, '')}</h2>
                <p>Show Correct ans</p>
            </div>
            <div className='options'>
                {
                    options.map(option => <Option
                        options={option}
                    ></Option>)
                }

            </div>
        </div>
    );
};

export default Question;
import React from 'react';
import Option from '../Option/Option';
import './Question.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const Question = ({ questions }) => {
    // console.log(questions)
    // console.log(questions.correctAnswer)
    // console.log(questions.options)
    const allOpt = questions.options;
    const corrOpt = questions.correctAnswer;


    function ansC(crr) {


        // console.log('crr ans', corrOpt)
        // console.log(anss)

        if (crr === corrOpt) {
            console.log('bal', corrOpt)
        }
        else {
            console.log('wrong')
        }

    }


    console.log(allOpt, corrOpt)

    const { question, correctAnswer, options } = questions;
    console.log(correctAnswer)
    return (
        <div className='quiz-div' >
            <div className='qus-eye' >
                <h2 className='quiz-question'>{question.replace(/(<([^>]+)>)/ig, '')}</h2>
                <div>
                    <p className="eye"><pre>    </pre><EyeIcon /></p>
                </div>
            </div>
            <div className='options'>
                {
                    options.map(option => <Option
                        options={option}
                        correctAnswer={correctAnswer}
                        ansC={ansC}

                    ></Option>)
                }

            </div>
        </div>
    );
};

export default Question;
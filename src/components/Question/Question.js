import React from 'react';
import Option from '../Option/Option';
import './Question.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ questions }) => {
    // console.log(questions)
    // console.log(questions.correctAnswer)
    // console.log(questions.options)
    const allOpt = questions.options;
    const corrOpt = questions.correctAnswer;


    function ansC(crr) {

        console.log(corrOpt, crr)

    }


    console.log(allOpt, corrOpt)

    const { question, correctAnswer, options } = questions;
    console.log(correctAnswer)
    const notify = () => toast(`Correct Ans:    ${correctAnswer}`);

    return (
        <div className='quiz-div' >
            <div className='qus-eye' >
                <h2 className='quiz-question'>{question.replace(/(<([^>]+)>)/ig, '')}</h2>
                <div>

                    <div>
                        <button className='eye' onClick={notify}><small>Ans</small><EyeIcon /></button>
                        <ToastContainer />
                    </div>
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
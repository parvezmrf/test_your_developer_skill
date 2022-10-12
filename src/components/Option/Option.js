import React from 'react';
import './Option.css'

const Option = ({ options, correctAnswer }) => {

    const handleAns = Answer => {

        console.log(options)
        console.log(correctAnswer)
        if (options === correctAnswer) {
            alert('Correct Answer')
        }
        else {
            alert('Wrong Answer. Press eye button to know')
        }

    }


    return (
        <div className='all-option'>
            <li onClick={() => handleAns()} className='ppp' >{options}</li>
        </div>
    );
};

export default Option;
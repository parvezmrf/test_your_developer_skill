import React from 'react';
import './Option.css'

const Option = ({ options, ansC, correctAnswer }) => {
    // console.log(correctAnswer)
    // const handleAns = Answer => {

    //     if (Answer === { options }) {
    //         alert('correct')
    //     }
    //     else {
    //         alert('wrong')
    //     }
    // }



    return (
        <div className='all-option'>
            <li onClick={() => ansC(correctAnswer)} className='ppp' >{options}</li>
        </div>
    );
};

export default Option;
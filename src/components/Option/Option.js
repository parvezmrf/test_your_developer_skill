import React from 'react';
import './Option.css'

const Option = ({ options }) => {
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
            <li className='ppp' >{options}</li>
        </div>
    );
};

export default Option;
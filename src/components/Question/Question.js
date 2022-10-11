import React from 'react';

const Question = ({ questions }) => {
    console.log(questions)
    const { question } = questions;
    return (
        <div>
            <h2>Questions here</h2>
            <p>Correct Ans</p>
        </div>
    );
};

export default Question;
import React from 'react';
import './QuizTopic.css';
import { Link } from 'react-router-dom';


const QuizTopic = ({ quiztopic }) => {
    const { id, name, logo, total } = quiztopic;
    console.log(quiztopic)
    return (
        <div className='quiz-topic' >
            <img src={logo} alt="" />
            <h2><i>{name}</i> Skill Tester </h2>
            <h4>Total Quiz {total}</h4>
            <button className='btn-test' > <Link to={`/quiz/${id}`}> Test For Free</Link> </button>
        </div>
    );
};

export default QuizTopic;
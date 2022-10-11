import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    // console.log(quiz.data.questions)
    const { questions } = quiz.data;
    console.log(questions)
    return (
        <div>
            {
                questions.map(question => <Question
                    key={question.id}
                    questions={question}
                ></Question>)
            }
        </div>
    );
};

export default Quiz;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'

const Home = () => {
    const quizTopic = useLoaderData();
    console.log(quizTopic.data)
    return (
        <div className='home-container' >
            <div className='quiz-container' >
                {
                    quizTopic.data.map(topic => <QuizTopic
                        key={topic.id}
                        quiztopic={topic}
                    ></QuizTopic>)
                }
            </div>

        </div>
    );
};

export default Home;
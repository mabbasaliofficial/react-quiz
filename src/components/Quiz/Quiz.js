import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData()
    const {questions} =quiz.data;
    return (
        <div className='m-lg-5 m-2'>
            <h2 className='fw-bold'>Quiz of {quiz.data.name}</h2>
            {
                questions.map(question => <Question
                key={question.id}
                questions={question}
                >
                </Question>)
            }
        </div>
    );
};

export default Quiz;
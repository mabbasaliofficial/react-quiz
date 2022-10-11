import React from 'react';

const Question = ({questions}) => {
    const {question} = questions;
    return (
        <div>
            <h3>{question}</h3>
        </div>
    );
};

export default Question;
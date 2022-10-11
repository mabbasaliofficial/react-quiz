import React from 'react';

const Question = ({questions}) => {
    const {question} = questions;
    const options = questions.options;
    return (
        <div >
            <div className='border border-info m-5 p-4 rounded bg-secondary d-flex flex-column align-items-center justify-content-center'>
            <h3 className='fw-bold text-white'>{question}</h3>
            {
                options.map(option => <div className='border border-info d-flex align-items-center justify-content-center bg-white p-2 my-2 w-75 rounded'>
                    <input className='mx-1' type="radio" name="" id="" />
                    <span className='fw-bold mx-1'>{option}</span>
                </div>)
            }
        </div>
        </div>
    );
};

export default Question;
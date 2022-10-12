import React from "react";
import {  Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuizContainer = ({ quiz }) => {
  const {id, name, logo, total } = quiz;
  return (
    <div className='mt-5 mb-5'>
      <Card className=' mx-1 border border-secondary'>
        <Card.Img variant="top" src={logo} className='bg-secondary'/>
        <Card.Body className="bg-light">
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text>
            Total Quiz: {total}
          </Card.Text>
          <Link to={`/quiz/${id}`} className='d-block p-2 text-bg-primary rounded text-decoration-none'>Start Quiz</Link>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuizContainer;

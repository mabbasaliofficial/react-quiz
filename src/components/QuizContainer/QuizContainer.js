import React from "react";
import { Button, Card } from "react-bootstrap";

const QuizContainer = ({ quiz }) => {
  const { name, logo, total } = quiz;
  return (
    <div className='mt-5 mb-5'>
      <Card style={{ width: "12rem" }} className='mx-1 border border-secondary'>
        <Card.Img variant="top" src={logo} className='bg-dark'/>
        <Card.Body className="bg-light">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Total Quiz: {total}
          </Card.Text>
          <Button variant="primary">Start Quiz</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuizContainer;

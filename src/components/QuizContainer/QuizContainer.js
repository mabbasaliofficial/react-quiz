import React from "react";
import { Button, Card } from "react-bootstrap";

const QuizContainer = ({ quiz }) => {
  const {id, name, logo, total } = quiz;
  return (
    <div className='mt-5 mb-5'>
      <Card style={{ width: "15rem" }} className='mx-1 border border-secondary'>
        <Card.Img variant="top" src={logo} className='bg-secondary'/>
        <Card.Body className="bg-light">
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text>
            Total Quiz: {total}
          </Card.Text>
          <Button className="w-100" variant="primary" href={`/${id}`}>Start Quiz</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuizContainer;

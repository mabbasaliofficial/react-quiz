import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import QuizContainer from "../QuizContainer/QuizContainer";

const Home = () => {
  const quizData = useLoaderData();
  const {data} = quizData;
  return (
    <div>
      <Header></Header>
      <div className="d-flex justify-content-center">
      {
        data.map(quiz => <QuizContainer
        key={quiz.id}
        quiz={quiz}
        ></QuizContainer>)
      }
      </div>
    </div>
  );
};

export default Home;

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ questions }) => {
  const { question } = questions;
  const options = questions.options;
  const correctAnswer = () => {
    toast.success((questions.correctAnswer), {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const answer = (option) => {
    if (option === questions.correctAnswer) {
      toast.success(('Congratulation! you are right...'), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else{
      toast.error(('Ohh no! You are wrong...'), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div className="border border-info my-lg-5 my-2 p-lg-4 rounded bg-secondary d-flex flex-column align-items-center justify-content-center position-relative">
      <div className="d-flex">
        <h3 className="fw-bold text-white w-75 mx-auto">{question}</h3>
        <div className="position-absolute top-0 end-0 p-3">
          <FontAwesomeIcon onClick={correctAnswer} icon={faEye} className="text-info"></FontAwesomeIcon>
          <ToastContainer
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
       />
        </div>
      </div>
      {options.map((option) => (
        <button id="answer-container" onClick={() => answer(option)} className="border border-info d-flex align-items-center justify-content-center bg-white p-2 my-2 w-75 rounded">
          <span className="fw-bold mx-1">{option}</span>
        </button>
         
      ))}
   
    </div>
  );
};

export default Question;

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Question = ({ questions }) => {
  const { question } = questions;
  const options = questions.options;
  return (
    <div className="border border-info my-lg-5 my-2 p-lg-4 rounded bg-secondary d-flex flex-column align-items-center justify-content-center position-relative">
      <div className="d-flex">
        <h3 className="fw-bold text-white w-75 mx-auto">{question}</h3>
        <div className="position-absolute top-0 end-0 p-3">
          <FontAwesomeIcon icon={faEye} className="text-info"></FontAwesomeIcon>
        </div>
      </div>
      {options.map((option) => (
        <div className="border border-info d-flex align-items-center justify-content-center bg-white p-2 my-2 w-75 rounded">
          <input className="mx-1" type="radio" name="" id="" />
          <span className="fw-bold mx-1">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default Question;

import "../styles/QuestionCard.css";
import { Card, CardBody, CardImg } from "reactstrap";
import { breedDataObj } from "../data/gameData.js";
import { useState } from "react";
import AnswerButtonGroup from "./AnswerButtonGroup.jsx";
import NextButton from "./NextButton.js";
import PreviousButton from "./PreviousButton.js";
import ResetButton from "./ResetButton.js";

function QuestionCard() {
  const [questionIndex, setquestionIndex] = useState(0);

  const incrementQuestionIndex = () => {
    setquestionIndex(questionIndex + 1);
  };

  const decrementQuestionIndex = () => {
    setquestionIndex(questionIndex - 1);
  };

  const resetQuestionIndex = () => {
    setquestionIndex(0);
  };

  return (
    <div className="d-flex justify-content-center p-2">
      <Card className="main-card">
        <CardImg
          className="card-image"
          src={breedDataObj[questionIndex].imagePath}
          alt="image"
        />

        <CardBody className="text-center" id="ntbTextSection">
          <p className="card-text">
            What is the name of the dog breed pictured above?
          </p>
        </CardBody>
        <CardBody id="answerButtonSection">
          <div>
            <AnswerButtonGroup questionIndex={questionIndex} />
          </div>
        </CardBody>

        <CardBody className="d-flex justify-content-between" id="navSection">
          <PreviousButton
            disabled={
              questionIndex === 0 || questionIndex === breedDataObj.length - 1
            }
            onClick={() => decrementQuestionIndex()}
          />
          <span>Question #{breedDataObj[questionIndex].questionId}</span>
          {questionIndex !== breedDataObj.length - 1 ? (
            <NextButton
              disabled={questionIndex === breedDataObj.length - 1}
              onClick={() => incrementQuestionIndex()}
            />
          ) : (
            <ResetButton
              disabled={questionIndex !== breedDataObj.length - 1}
              onClick={() => resetQuestionIndex()}
            />
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default QuestionCard;

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
  const [score, setScore] = useState(0);

  const incrementQuestionIndex = () => {
    setquestionIndex(questionIndex + 1);
  };

  const decrementQuestionIndex = () => {
    setquestionIndex(questionIndex - 1);
  };

  const resetQuestionIndex = () => {
    setquestionIndex(0);
    setScore(0);
  };

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="d-flex justify-content-center">
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
          <div style={{ visibility: "visible" }}>
            <AnswerButtonGroup
              updateScore={() => updateScore()} // callback passed to AnswerButtonGroup then to AnswerButton
              questionIndex={questionIndex}
            />
          </div>
        </CardBody>

        <CardBody
          className="d-flex justify-content-between flex-row align-items-center"
          id="navSection"
        >
          <div className="d-flex flex-column">
            <PreviousButton
              disabled={
                questionIndex === 0 || questionIndex === breedDataObj.length - 1
              }
              onClick={() => decrementQuestionIndex()}
            />
          </div>
          <div id="midCol" className="d-flex flex-column">
            <span>Question #{breedDataObj[questionIndex].questionId}</span>
            <div id="score">🐶Score {score}/20🐶</div>
          </div>
          <div className="d-flex flex-column">
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
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default QuestionCard;

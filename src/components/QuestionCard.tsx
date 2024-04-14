import { Card, CardBody, CardImg } from "reactstrap";
import { breedDataObj } from "../data/gameData.js";
import { useState } from "react";
import AnswerButtonGroup from "./AnswerButtonGroup.jsx";
import NextButton from "./NextButton.js";
import PreviousButton from "./PreviousButton.js";

function QuestionCard() {
  // const handleSelectedItem = (item: string) => console.log(item);

  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
    setIndex(index + 1);
  };

  const decrementIndex = () => {
    setIndex(index - 1);
  };

  return (
    <div className="d-flex justify-content-center p-2">
      <Card style={{ width: "30rem" }}>
        <CardImg
          src={breedDataObj[index].imagePath}
          alt="image"
          style={{ width: "100%" }}
        />

        <CardBody>
          <p className="card-text">
            What is the name of the dog breed pictured above?
          </p>
        </CardBody>
        <CardBody>
          <div>
            <AnswerButtonGroup index={index} />
          </div>
        </CardBody>

        <CardBody>
          <PreviousButton onClick={() => decrementIndex()} />
          <span>Question #{breedDataObj[index].questionId}</span>
          <NextButton onClick={() => incrementIndex()} />
        </CardBody>
      </Card>
    </div>
  );
}

export default QuestionCard;

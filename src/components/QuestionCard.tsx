import { Card, CardBody, CardImg } from "reactstrap";
import AnswerButtonGroup from "./AnswerButtonGroup.jsx";
import { breedDataObj } from "../data/gameData.js";
import NextButton from "./NextButton.js";
import { useState } from "react";

// index passed in from <My Card /> App component
// interface Props {
//   index: number;
// }

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
            {/* <AnswerButtonGroup index={index} /> */}
            {/* <ListGroup items={items} onSelectedItem={handleSelectedItem} /> */}
          </div>
        </CardBody>

        <CardBody>
          <button
            disabled={false}
            id="prev"
            // style={{ marginLeft: "250px" }}
            onClick={decrementIndex}
          >
            Previous
          </button>
          <button
            disabled={false}
            id="next"
            style={{ float: "right" }}
            onClick={incrementIndex}
          >
            Next
          </button>
          {/* <NextButton index={index} /> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default QuestionCard;

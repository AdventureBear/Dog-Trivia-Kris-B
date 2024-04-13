import { Card, CardBody, CardImg } from "reactstrap";
import AnswerButtonGroup from "./AnswerButtonGroup.jsx";
import { breedDataObj } from "../data/gameData.js";
import NextButton from "./NextButton.js";

// index passed in from <My Card /> App component
interface Props {
  index: number;
}

function QuestionCard({ index }: Props) {
  // const handleSelectedItem = (item: string) => console.log(item);

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
          {/* <button>Previous</button> */}
          {/* <button style={{ float: "right" }}>Next</button> */}
          {/* <NextButton index={index} /> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default QuestionCard;

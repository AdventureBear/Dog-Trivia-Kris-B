import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import ButtonGroup from "./ButtonGroup";
import { breedDataObj } from "../data/gameData.js";

// index passed in from <My Card /> App component
interface Props {
  index: number;
}

function MyCard({ index }: Props) {
  const handleSelectedItem = (item: string) => console.log(item);

  return (
    <div className="d-flex justify-content-center p-2">
      <Card style={{ width: "30rem" }}>
        <CardBody>
          <CardTitle tag="h5">Name That Breed</CardTitle>
        </CardBody>
        <CardImg
          src={breedDataObj[index].imagePath}
          alt="image"
          style={{ width: "100%" }}
        />

        <CardBody>
          {/* <h5 className="card-title">Card title</h5> */}
          <p className="card-text">
            What is the name of the dog breed pictured above?
          </p>
        </CardBody>
        <CardBody>
          <div>
            <ButtonGroup index={index} />
            {/* <ListGroup items={items} onSelectedItem={handleSelectedItem} /> */}
          </div>
        </CardBody>

        <CardBody>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </CardBody>
      </Card>
    </div>
  );
}

export default MyCard;

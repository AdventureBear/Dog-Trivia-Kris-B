import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import puppy from "../images/gold_pup.jpg";

const MyCard = () => {
  return (
    <div className="d-flex justify-content-center p-2">
      <Card style={{ width: "30rem" }}>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
        </CardBody>
        <CardImg
          // className="card-img-top"
          src={puppy}
          alt="image"
          style={{ width: "100%" }}
        />
        <CardBody>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </CardBody>
        <CardBody>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
          </ul>
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
};

export default MyCard;

import { breedDataObj } from "../data/gameData";

interface Props {
  index: number;
}

function ButtonGroup({ index }: Props) {
  return (
    <>
      <div>
        <button id="ansBtnA">{breedDataObj[index].correct}</button>
        <button id="ansBtnB">{breedDataObj[index].incorrect1}</button>
      </div>
      <div>
        <button id="ansBtnA">{breedDataObj[index].incorrect2}</button>
        <button id="ansBtnB">{breedDataObj[index].incorrect3}</button>
      </div>
    </>
  );
}

export default ButtonGroup;

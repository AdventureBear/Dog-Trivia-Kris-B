import { useState } from "react";
import App from "../App";
import QuestionCard from "./QuestionCard";

interface Props {
  index: number;
}

function NextButton({ index }: Props) {
  const [nextIndex, setNextIndex] = useState(0);

  const changeIndex = () => {
    console.log(nextIndex);
    setNextIndex(nextIndex + 1);
    <QuestionCard index={nextIndex} />;
  };

  // const handleNextClick = () => {
  //   changeIndex();
  //   console.log(nextIndex);
  //   // <App index={index} />;
  // };

  return (
    <>
      <p>The next index is {nextIndex}</p>
      <button style={{ float: "right" }} onClick={changeIndex}>
        Next
      </button>
    </>
  );
}

export default NextButton;

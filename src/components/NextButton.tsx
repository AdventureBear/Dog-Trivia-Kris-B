import { useState } from "react";
import App from "../App";
import QuestionCard from "./QuestionCard";

interface Props {
  index: number;
}

function NextButton({ index }: Props) {
  return (
    <>
      <button
        disabled={false}
        id="next"
        style={{ float: "right", marginRight: "250px" }}
        // onClick={incrementIndex}
      >
        Next
      </button>
    </>
  );
}

export default NextButton;

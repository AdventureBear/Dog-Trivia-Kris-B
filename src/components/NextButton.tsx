interface Props {
  disabled: boolean;
  onClick: () => void;
}

function NextButton({ disabled, onClick }: Props) {
  return (
    <>
      <button
        disabled={disabled}
        id="next"
        style={{ float: "right" }}
        onClick={onClick}
      >
        Next
      </button>
    </>
  );
}

export default NextButton;

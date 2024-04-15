interface Props {
  disabled: boolean;
  onClick: () => void;
}

function PreviousButton({ disabled, onClick }: Props) {
  return (
    <>
      <button
        disabled={disabled}
        id="prev"
        style={{ marginRight: "50px" }}
        onClick={onClick}
      >
        Previous
      </button>
    </>
  );
}

export default PreviousButton;

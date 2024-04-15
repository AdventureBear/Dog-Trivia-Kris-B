interface Props {
  disabled: boolean;
  onClick: () => void;
}

function NextButton({ disabled, onClick }: Props) {
  return (
    <>
      <button disabled={disabled} id="next" onClick={onClick}>
        Next &gt;&gt;&gt;
      </button>
    </>
  );
}

export default NextButton;

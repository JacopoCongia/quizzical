function Answer({ answer, question, selected, handleChange }) {
  return (
    <>
      <input
        className="hidden peer"
        type="radio"
        name={question}
        id={answer}
        value={answer}
        checked={selected[question] === answer}
        onChange={(e) => handleChange(e, question)}
      />
      <label
        className="hover:cursor-pointer select-none font-inter text-[#293264] text-[0.8rem] peer-checked:bg-[#D6DBF5] border border-[#4D5B9E] px-3 py-1 rounded-[9px] whitespace-nowrap"
        htmlFor={answer}
      >
        {answer}
      </label>
    </>
  );
}

export default Answer;

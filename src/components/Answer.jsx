function Answer({ answer, question, handleRadioChange, selected, entry }) {
  return (
    <div>
      <input
        className="hidden peer"
        type="radio"
        id={answer}
        value={answer}
        name={question}
        checked={selected === answer}
        onChange={(e) => handleRadioChange(e)}
      />
      <label
        className={` hover:cursor-pointer select-none font-inter text-[#293264] text-[0.8rem] peer-checked:bg-[#D6DBF5] border border-[#4D5B9E] px-3 py-1 rounded-[9px] whitespace-nowrap`}
        htmlFor={answer}
      >
        {answer}
      </label>
    </div>
  );
}

export default Answer;

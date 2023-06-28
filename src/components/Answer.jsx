function Answer({
  answer,
  question,
  isChecked,
  handleAnswerChange,
  endgame,
  isCorrect,
  correctAnswer,
}) {
  // Update this line with the conditional checking if the answer is correct
  const endgameAnswerHighlight =
    isCorrect && endgame
      ? "peer-checked:bg-green-700"
      : !isCorrect && endgame
      ? "peer-checked:bg-red-700 peer-checked:text-white"
      : "";

  const correctAnswerHighlight =
    endgame && correctAnswer === answer && "bg-green-700 text-white";

  return (
    <div>
      <input
        disabled={endgame && true}
        className="peer hidden"
        type="radio"
        id={answer}
        name={question}
        value={answer}
        checked={isChecked[question] === answer}
        onChange={(e) => handleAnswerChange(e, question)}
      />

      <label
        className={`select-none whitespace-nowrap rounded-[9px] border border-[#4D5B9E] px-3 py-2 font-inter text-[0.8rem] text-[#293264] hover:cursor-pointer hover:bg-[#E3E7FF] peer-checked:bg-[#D6DBF5] ${endgameAnswerHighlight} ${correctAnswerHighlight}`}
        htmlFor={answer}
      >
        {answer}
      </label>
    </div>
  );
}

export default Answer;

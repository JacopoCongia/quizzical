import classNames from "classnames";

function Answer({
  answer,
  question,
  isChecked,
  handleAnswerChange,
  endgame,
  isCorrect,
  correctAnswer,
}) {
  const classes = classNames(
    "grow select-none whitespace-nowrap rounded-[9px] border border-[#4D5B9E] px-3 py-2 text-center font-inter text-[0.8rem] text-[#293264] hover:cursor-pointer hover:bg-[#E3E7FF] peer-checked:bg-[#D6DBF5]",
    {
      "peer-checked:bg-green-700": isCorrect && endgame,
      "peer-checked:bg-red-700 peer-checked:text-white": !isCorrect && endgame,
      "bg-green-700 text-white": endgame && correctAnswer === answer,
      "pointer-events-none": endgame,
    }
  );

  return (
    <div className="flex grow">
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
        className={classes}
        htmlFor={answer}
      >
        {answer}
      </label>
    </div>
  );
}

export default Answer;

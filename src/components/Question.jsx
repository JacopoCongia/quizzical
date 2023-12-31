import { useEffect, useState } from "react";
import { shuffleArray } from "../../utils";
import Answer from "./Answer";

function Question({ entry, entries, setEntries, endgame }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isChecked, setIsChecked] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const { question, correctAnswer, wrongAnswers } = entry;

  function handleAnswerChange(e) {
    const { value } = e.target;

    // Handles the controlled radio input element
    setIsChecked((prevIsChecked) => {
      return {
        ...prevIsChecked,
        [question]: value,
      };
    });

    // Checks if the current answer is the correct one
    setIsCorrect(
      entries.some((en) => {
        return en.correctAnswer === value;
      })
    );

    // Assigns the currently selected answer to the entries array
    setEntries((prevEntries) => {
      return prevEntries.map((item) => {
        if (item.question === e.target.name) {
          return {
            ...item,
            selectedAnswer: value,
          };
        } else return item;
      });
    });
  }

  useEffect(() => {
    setShuffledAnswers(shuffleArray([...wrongAnswers, correctAnswer]));
  }, []);

  const allAnswersElements = shuffledAnswers.map((answer) => {
    return (
      <Answer
        key={answer}
        question={question}
        answer={answer}
        correctAnswer={correctAnswer}
        isChecked={isChecked}
        handleAnswerChange={handleAnswerChange}
        endgame={endgame}
        entries={entries}
        isCorrect={isCorrect}
      />
    );
  });

  return (
    <div className="w-[100%] min-w-[320px] max-w-[700px]">
      <h1 className="mb-[1.5em] text-center font-karla font-bold text-[#293264]">
        {question}
      </h1>
      <div className="mb-[30px] flex flex-wrap gap-3">{allAnswersElements}</div>
      <hr className="mb-[1em]" />
    </div>
  );
}

export default Question;

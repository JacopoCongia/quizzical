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
    setIsChecked((prevIsChecked) => {
      return {
        ...prevIsChecked,
        [question]: value,
      };
    });

    setIsCorrect(
      entries.some((en) => {
        return en.correctAnswer === value;
      })
    );

    console.log(isCorrect);

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
    <div>
      <h1 className="mb-[1em] font-karla font-bold text-[#293264]">
        {question}
      </h1>
      <div className="mb-[30px] flex flex-wrap gap-4">{allAnswersElements}</div>
      <hr className="mb-[1em]" />
    </div>
  );
}

export default Question;

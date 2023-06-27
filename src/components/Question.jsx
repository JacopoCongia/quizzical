import { useEffect, useState } from "react";
import { shuffleArray } from "../../utils";
import Answer from "./Answer";

function Question({ questions, question, correctAnswer, incorrectAnswers }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selected, setSelected] = useState("");

  function handleRadioChange(e) {
    setSelected(e.target.value);
    if (e.target.value === correctAnswer) {
      //
    }
  }

  useEffect(() => {
    setShuffledAnswers(shuffleArray(allAnswers));
  }, []);

  const allAnswers = incorrectAnswers
    .map((answer) => {
      return answer;
    })
    .concat(correctAnswer);

  const allAnswersElements = shuffledAnswers.map((answer) => {
    return (
      <Answer
        key={answer}
        questions={questions}
        answer={answer}
        question={question}
        handleRadioChange={handleRadioChange}
        selected={selected}
      />
    );
  });

  return (
    <div>
      <h1 className="text-[#293264] font-bold font-karla mb-[12px]">
        {question}
      </h1>
      <div className="grid grid-cols-2 justify-center gap-3 mb-[30px] min-[900px]:grid-cols-4">
        {allAnswersElements}
      </div>
      <hr />
    </div>
  );
}

export default Question;

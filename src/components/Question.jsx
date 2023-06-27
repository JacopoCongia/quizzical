import { useEffect, useState } from "react";
import { shuffleArray } from "../../utils";
import Answer from "./Answer";

function Question({ entry, questions, setQuestions }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selected, setSelected] = useState("");
  const { question, correct_answer, incorrect_answers } = entry;
  const correctAnswers = questions.filter((q) => {
    return q.isCorrect;
  });

  function handleRadioChange(e) {
    setSelected(e.target.value);

    if (e.target.value === correct_answer) {
      const newQuestions = questions.map((q) => {
        if (q.correct_answer === e.target.value) {
          return { ...q, isCorrect: true };
        } else return q;
      });
      setQuestions(newQuestions);
    } else return entry;
  }

  useEffect(() => {
    setShuffledAnswers(shuffleArray(allAnswers));
  }, []);

  const allAnswers = incorrect_answers
    .map((answer) => {
      return answer;
    })
    .concat(correct_answer);

  const allAnswersElements = shuffledAnswers.map((answer) => {
    return (
      <Answer
        key={answer}
        questions={questions}
        answer={answer}
        question={question}
        handleRadioChange={handleRadioChange}
        selected={selected}
        entry={entry}
      />
    );
  });

  return (
    <div>
      <h1 className="text-[#293264] font-bold font-karla mb-[12px]">
        {question}
      </h1>
      <div className="flex flex-wrap justify-center gap-3 mb-[30px]">
        {allAnswersElements}
      </div>
      <hr />
    </div>
  );
}

export default Question;

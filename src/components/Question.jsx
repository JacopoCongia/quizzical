import { useEffect, useState } from "react";
import { shuffleArray } from "../../utils";
import Answer from "./Answer";

function Question({
  questions,
  setQuestions,
  incorrectAnswers,
  correctAnswer,
  question,
}) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selected, setSelected] = useState("");

  function handleChange(e, quest) {
    setSelected({
      ...selected,
      [quest]: e.target.value,
    });

    const updatedQuestions = questions.map((quest) => {
      if (quest.correct_answer === e.target.value) {
        return {
          ...quest,
          isCorrect: true,
        };
      } else {
        return {
          ...quest,
          isCorrect: false,
        };
      }
    });
    setQuestions(updatedQuestions);

    // console.log(
    //   updatedQuestions.map((item) => {
    //     return item.isCorrect;
    //   })
    // );
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
        answer={answer}
        question={question}
        questions={questions}
        selected={selected}
        handleChange={handleChange}
      />
    );
  });

  return (
    <div key={question}>
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

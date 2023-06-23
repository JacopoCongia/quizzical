import { useState } from "react";

function Answer({ answer, question, questions, setQuestions }) {
  const [selected, setSelected] = useState("");

  function handleChange(e) {
    setSelected(e.target.value);
    const updatedQuestions = questions.map((quest) => {
      if (quest.correct_answer === e.target.value) {
        return {
          ...quest,
          isCorrect: true
        };
      } else {
        return quest;
      }
    });
    // console.log(
    //   updatedQuestions.map((item) => {
    //     return item.isCorrect;
    //   })
    // );
    setQuestions(updatedQuestions);
  }

  return (
    <>
      <input
        className="peer hidden"
        type="radio"
        name={question}
        id={answer}
        value={answer}
        checked={selected === answer}
        onChange={(e) => handleChange(e)}
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

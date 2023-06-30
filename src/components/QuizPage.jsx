import { useState } from "react";
import Question from "./Question";

function QuizPage({
  entries,
  setEntries,
  getApiData,
  selected,
  setIsHomeVisible,
}) {
  const [endgame, setEndgame] = useState(false);
  const correctAnswers = entries.filter((item) => {
    if (item.selectedAnswer === item.correctAnswer) {
      return true;
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    setEndgame(true);

    if (endgame) {
      getApiData(selected);
      setEndgame(false);
    }
  }

  const questionsEl = entries.map((entry) => {
    const { question } = entry;

    return (
      <Question
        key={question}
        entry={entry}
        entries={entries}
        setEntries={setEntries}
        endgame={endgame}
      />
    );
  });

  return (
    <div>
      <h1 className="pt-[1.5em] text-center font-inter text-[2.5rem] font-bold text-[#4D5B9E]">
        Quizzical!{" "}
        <span className="block text-[1rem] uppercase text-[#323232]">
          A quiz for everyone
        </span>
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center gap-[15px] px-[75px] py-[40px]"
      >
        {questionsEl}
        {endgame && (
          <div className="rounded-[10px] bg-yellow-200 px-6 py-3 font-inter">
            You got {correctAnswers.length}/{entries.length} answers correct!
          </div>
        )}
        <div className="flex gap-3 pt-5">
          <button className="rounded-[15px] bg-[#4D5B9E] px-8 py-3 font-inter text-[0.8rem] text-white hover:opacity-80">
            {endgame ? "Play Again" : "Check Answers"}
          </button>
          {endgame && (
            <button
              onClick={(e) => {
                setIsHomeVisible(true), e.preventDefault();
              }}
              className="rounded-[15px] bg-[#4D5B9E] px-8 py-3 font-inter text-[0.8rem] text-white hover:opacity-80"
            >
              Change Settings
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default QuizPage;

import { useState } from "react";
import Question from "./Question";

function QuizPage({ entries, setEntries, getApiData }) {
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
      getApiData();
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
      <h1 className="pt-[1.5em] text-center font-inter text-3xl">
        Quizzical! A quiz for everyone
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-start gap-[15px] px-[75px] py-[40px]"
      >
        {questionsEl}
        <button className="self-center rounded-[15px] bg-[#4D5B9E] px-8 py-3 font-inter text-[0.8rem] text-white hover:opacity-80">
          {endgame ? "Play Again" : "Check Answers"}
        </button>
        {endgame && (
          <div className="self-center rounded-[10px] bg-yellow-200 p-4 font-inter">
            You got {correctAnswers.length}/{entries.length} answers correct!
          </div>
        )}
      </form>
    </div>
  );
}

export default QuizPage;

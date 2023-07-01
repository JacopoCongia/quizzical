import { useState } from "react";
import Question from "./Question";
import Skeleton from "./Skeleton";

function QuizPage({
  entries,
  setEntries,
  getApiData,
  selected,
  setIsHomeVisible,
  isLoading,
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
      {isLoading ? (
        <>
          <h1 className="pt-[1.5em] text-center font-karla text-[2.2rem] text-[#4D5B9E] sm:text-[3.5rem]">
            Quizzical!{" "}
            <span className="block font-inter text-[0.8rem] uppercase text-[#293264] sm:text-[1.2rem]">
              A quiz for everyone
            </span>
          </h1>
          <Skeleton
            className="h-[6em] max-w-[700px]"
            times={Number(selected.amount)}
          />
        </>
      ) : (
        <>
          <h1 className="pt-[1.5em] text-center font-karla text-[2.2rem] text-[#4D5B9E] sm:text-[3.5rem]">
            Quizzical!{" "}
            <span className="block font-inter text-[0.8rem] uppercase text-[#293264] sm:text-[1.2rem]">
              A quiz for everyone
            </span>
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex w-[100%] flex-col items-center gap-[15px] px-[75px] py-[40px]"
          >
            {questionsEl}
            {endgame && (
              <div className="w-[100%] rounded-[10px] bg-yellow-200 px-6 py-3 text-center font-inter">
                You got {correctAnswers.length}/{entries.length} answers
                correct!
              </div>
            )}
            <div className="flex w-[100%] flex-col justify-center gap-3 pt-5 min-[580px]:flex-row">
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
        </>
      )}
    </div>
  );
}

export default QuizPage;

import Question from "./Question";

function QuizPage({ questions, setQuestions }) {
  const correctAnswers = questions.map((item) => {
    return item.correct_answer;
  });

  function handleCheckAnswers(e) {
    e.preventDefault();
  }

  const questionsElement = questions.map((entry) => {
    const { question } = entry;

    return (
      <Question
        key={question}
        entry={entry}
        questions={questions}
        setQuestions={setQuestions}
      />
    );
  });

  return (
    <form
      onSubmit={(e) => handleCheckAnswers(e)}
      className="flex flex-col gap-[15px] items-center text-center py-[40px] px-[75px]"
    >
      {questionsElement}
      <button className="font-inter px-8 py-3 text-[0.8rem] rounded-[15px] bg-[#4D5B9E] text-white">
        Check Answers
      </button>
    </form>
  );
}

export default QuizPage;

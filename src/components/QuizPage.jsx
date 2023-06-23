import Question from "./Question";

function QuizPage({ questions, setQuestions }) {
  const questionsElement = questions.map((item) => {
    const { incorrect_answers, correct_answer, question } = item;

    return (
      <>
        <Question
          questions={questions}
          setQuestions={setQuestions}
          incorrectAnswers={incorrect_answers}
          correctAnswer={correct_answer}
          question={question}
        />
      </>
    );
  });

  return (
    <form className="flex flex-col gap-[15px] items-center text-center py-[40px] px-[75px]">
      {questionsElement}
      <button className="font-inter px-8 py-3 text-[0.8rem] rounded-[15px] bg-[#4D5B9E] text-white">
        Check Answers
      </button>
    </form>
  );
}

export default QuizPage;

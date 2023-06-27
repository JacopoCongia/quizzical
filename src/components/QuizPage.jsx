import { useEffect, useState } from "react";
import Question from "./Question";
import Skeleton from "./Skeleton";

function QuizPage({ questions, setQuestions, isLoading }) {
  const correctAnswers = questions.map((item) => {
    return item.correct_answer;
  });

  function handleCheckAnswers(e) {
    e.preventDefault();
  }

  const questionsElement = questions.map((item) => {
    const { incorrect_answers, correct_answer, question } = item;

    return (
      <Question
        key={question}
        questions={questions}
        incorrectAnswers={incorrect_answers}
        correctAnswer={correct_answer}
        question={question}
      />
    );
  });

  return (
    <form
      onSubmit={(e) => handleCheckAnswers(e)}
      className="flex flex-col gap-[15px] items-center text-center py-[40px] px-[75px]"
    >
      {isLoading ? (
        <Skeleton
          times={5}
          className="h-10 w-full"
        />
      ) : (
        questionsElement
      )}
      <button className="font-inter px-8 py-3 text-[0.8rem] rounded-[15px] bg-[#4D5B9E] text-white">
        Check Answers
      </button>
    </form>
  );
}

export default QuizPage;

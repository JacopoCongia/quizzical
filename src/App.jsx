import { useState } from "react";
import Home from "./components/Home";
import QuizPage from "./components/QuizPage";
import { decodeText } from "../utils";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  function getApiData() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const updatedResults = data.results.map((item) => {
          return {
            question: decodeText(item.question),
            correct_answer: decodeText(item.correct_answer),
            incorrect_answers: item.incorrect_answers.map((inAnswer) => {
              return decodeText(inAnswer);
            }),
            isCorrect: false,
          };
        });
        setQuestions(updatedResults);
      });
  }

  function handleClick() {
    getApiData();
    setIsHomeVisible(false);
  }

  // useEffect(() => {}, []);

  return (
    <>
      {isHomeVisible ? (
        <Home handleClick={handleClick} />
      ) : (
        <QuizPage
          questions={questions}
          setQuestions={setQuestions}
        />
      )}
    </>
  );
}
export default App;

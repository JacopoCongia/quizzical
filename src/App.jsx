import { useState, useEffect } from "react";
import Home from "./components/Home";
import QuizPage from "./components/QuizPage";
import { decodeText } from "../utils";

function App() {
  const [entries, setEntries] = useState([]);
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  function getApiData() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const updatedResults = data.results.map((result) => {
          return {
            question: decodeText(result.question),
            correctAnswer: decodeText(result.correct_answer),
            selectedAnswer: null,
            wrongAnswers: result.incorrect_answers.map((answer) => {
              return decodeText(answer);
            }),
          };
        });
        setEntries(updatedResults);
      });
  }

  function handleClick() {
    setIsHomeVisible(false);
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      {isHomeVisible ? (
        <Home handleClick={handleClick} />
      ) : (
        <QuizPage
          entries={entries}
          setEntries={setEntries}
          getApiData={getApiData}
        />
      )}
    </>
  );
}
export default App;

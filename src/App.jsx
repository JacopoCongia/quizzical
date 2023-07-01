import { useState, useEffect } from "react";
import { decodeText } from "../utils";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";

function App() {
  const [entries, setEntries] = useState([]);
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState({
    difficulty: "easy",
    amount: "5",
    categories: "any",
  });

  function getApiData() {
    console.log("Fetch Start");
    setIsLoading(true);
    fetch(
      `https://opentdb.com/api.php?amount=${
        selected.amount
      }&type=multiple&difficulty=${selected.difficulty}&category=${
        selected.categories === "any" ? "" : selected.categories
      }`
    )
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
        console.log("Fetch End");
        setIsLoading(false);
      });
  }

  function handleClick() {
    setIsHomeVisible(false);
    getApiData();
  }

  useEffect(() => {}, []);

  return (
    <>
      {isHomeVisible ? (
        <HomePage
          handleClick={handleClick}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <QuizPage
          entries={entries}
          setEntries={setEntries}
          getApiData={getApiData}
          setIsHomeVisible={setIsHomeVisible}
          isLoading={isLoading}
          selected={selected}
        />
      )}
    </>
  );
}
export default App;

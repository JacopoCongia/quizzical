import classNames from "classnames";
import data from "../../data";

function Settings({ handleClick, selected, setSelected }) {
  const radioClasses = classNames(
    "rounded-[8px] border text-center px-5 py-1 peer-checked:bg-[#D6DBF5] grow hover:cursor-pointer border-[#4D5B9E]"
  );

  const titleClasses = classNames(
    "pb-2 pt-6 text-center font-inter text-[0.9rem]"
  );

  const difficultyEl = data.difficulty.map((option) => {
    return (
      <div
        key={option.difficulty}
        className="flex grow"
      >
        <input
          className="peer hidden"
          type="radio"
          name="difficulty"
          id={option.difficulty}
          value={option.difficulty}
          checked={selected.difficulty === option.difficulty}
          onChange={(e) => handleChange(e)}
        />
        <label
          className={radioClasses}
          htmlFor={option.difficulty}
        >
          {option.value}
        </label>
      </div>
    );
  });

  const numberOfQuestionsEl = data.numberOfQuestions.map((option) => {
    return (
      <div
        key={option.value}
        className="flex grow"
      >
        <input
          className="peer hidden"
          type="radio"
          name="amount"
          id={option.value}
          value={option.value}
          checked={selected.amount === option.value}
          onChange={(e) => handleChange(e)}
        />
        <label
          className={radioClasses}
          htmlFor={option.value}
        >
          {option.value}
        </label>
      </div>
    );
  });

  const categoriesEl = data.categories.map((option) => {
    return (
      <option
        key={option.value}
        value={option.value}
      >
        {option.category}
      </option>
    );
  });

  function handleChange(e) {
    setSelected((prevSelected) => {
      return {
        ...prevSelected,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="mt-[50px] flex flex-col items-center justify-center text-[#2D2D2D]">
      <div className="flex flex-col">
        <h2 className={titleClasses}>Difficulty</h2>
        <div className="flex gap-2 font-inter text-[0.8rem]">
          {difficultyEl}
        </div>
        <h2 className={titleClasses}>Number of questions</h2>
        <div className="flex gap-2 font-inter text-[0.8rem]">
          {numberOfQuestionsEl}
        </div>
        <h2 className={titleClasses}>Category</h2>
        <select
          onChange={(e) => handleChange(e)}
          name="categories"
          value={selected.categories}
          className="w-full rounded-[8px] border border-[#4D5B9E] bg-gray-50 p-2.5 text-sm focus:border-[#4D5B9E] focus:ring-[#4D5B9E]"
        >
          {categoriesEl}
        </select>
      </div>
      <button
        onClick={() => handleClick()}
        className="mt-[75px] w-[193px] rounded-[15px] bg-[#4D5B9E] px-[2em] py-3 font-inter text-[1rem] text-[#F5F7FB]"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Settings;

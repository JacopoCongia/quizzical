function Home({ handleClick }) {
  return (
    <div className="flex flex-col items-center justify-center border-red-100 border h-[100vh]">
      <h1 className="text-[#293264] font-karla text-[2rem]">Quizzical</h1>
      <p className="text-[#293264] font-inter text-[1rem]">
        A quiz for everyone!
      </p>
      <button
        onClick={handleClick}
        className="bg-[#4D5B9E] font-inter rounded-[15px] text-[1rem] text-[#F5F7FB] w-[193px] px-[2em] py-3 mt-[29px]"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Home;

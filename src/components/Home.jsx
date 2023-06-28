function Home({ handleClick }) {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center border border-red-100">
      <h1 className="font-karla text-[2rem] text-[#293264]">Quizzical</h1>
      <p className="font-inter text-[1rem] text-[#293264]">
        A quiz for everyone!
      </p>
      <button
        onClick={handleClick}
        className="mt-[29px] w-[193px] rounded-[15px] bg-[#4D5B9E] px-[2em] py-3 font-inter text-[1rem] text-[#F5F7FB]"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Home;

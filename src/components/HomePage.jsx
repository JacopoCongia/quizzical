import Settings from "./Settings";

function Home({ handleClick, selected, setSelected }) {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <h1 className="font-karla text-[2.2rem] text-[#293264] sm:text-[3.5rem]">
        Quizzical
      </h1>
      <p className="font-inter text-[0.8rem] uppercase text-[#293264] sm:text-[1.2rem]">
        A quiz for everyone!
      </p>

      <Settings
        handleClick={handleClick}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default Home;

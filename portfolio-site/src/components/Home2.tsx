const Home = () => {
  return (
    <div className=" h-[70vh]">
      <div className="flex flex-col justify-center p-6 h-full">
        <h2 className="text-[1.5rem] font-bold">
          Hi, I'm <span className="text-cyan-400">Kyle Levisay</span>.
        </h2>
        <h2 className="text-[4.4rem] mb-3 font-bold">
          fullstack <br />
          developer
        </h2>
        <p className="mb-6 text-[1.1rem]">
          Let me help you take your small business to the next level with a
          professional looking website.
        </p>
        <div className="">
          <button className="border-2 p-2 w-[50%] bg-">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

const Home = () => {
  return (
    <div className="md:grid md:grid-cols-2 p-4 justify-self-start align-self-start">
      <div className="text-start p-4">
        <h1 className="text-[3rem] mb-4 font-bold">
          Hi, I'm <span className="">Kyle Levisay</span>
        </h1>
        <p className="mb-4">
          Let me help you take your small business to the next level with a
          professional looking website.
        </p>
        <div className="">
          <button className="border-2 p-2">Contact</button>
        </div>
      </div>
      <div className="p-2">
        <img className="h-full" src="../../public/sample.webp" alt="" />
      </div>
    </div>
  );
};

export default Home;

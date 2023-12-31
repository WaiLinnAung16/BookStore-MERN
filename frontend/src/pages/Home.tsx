import HomeImg from "../assets/Home.jpg";

const Home = () => {
  return (
    <div className="relative">
      {/* Overlay container */}
      <div className="w-full h-screen bg-primary/70 absolute top-0 flex items-end">
        <h1 className="w-[60%] p-5 text-7xl font-black text-[#ACB2A4]">
          Words That Whisper,
          <br /> Pages That Roar <br />
          Dive into the Magic of Reading with Us!
        </h1>
      </div>
      {/* Main Image */}
      <img
        src={HomeImg}
        alt="Books Image"
        className="w-full h-screen object-cover object-center"
      />
    </div>
  );
};

export default Home;

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">Hi, my name is</p>{" "}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Tung Yu Chen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 px-4 max-w-[700px] text-2xl">
          With about 2 years academic programming experience. Able to finish
          full stack problem solving with Java, C#, PHP, Javascript.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-4xl duration-300">
            <Link to="work" smooth={true} offset={50} duration={500} className='flex items-center'>
              View Work <HiArrowNarrowRight className="ml-3" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

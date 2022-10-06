import React from "react";

import Csharp from "../assets/C-Sharp.webp";
import Java from "../assets/java.png";
import Javascript from "../assets/javascript.png";
import Reactjs from "../assets/react.png";
import Node from "../assets/node.png";
import Spring from "../assets/spring.png";
import Git from "../assets/git.png";
import SQL from "../assets/sql.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f]  text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"> 
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">Skills</p>
          <p className="py-4 font-bold">There are major technologies I have worked with, but more than these</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:scale-125 duration-500">
            <img src={Java} alt="Java" className="w-15 h-20 mx-auto" />
            <p className="my-4">Java</p>
          </div>
          <div className="hover:scale-125 duration-500">
            <img src={Csharp} alt="Csharp" className="w-25 h-20 mx-auto" />
            <p className="my-4">C#</p>
          </div>
          <div className="hover:scale-125 duration-500">
            <img src={Javascript} alt="Javascript" className="w-20 h-20 mx-auto" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="hover:scale-125 duration-500">
            <img src={Spring} alt="Spring Boot" className="w-25 h-20 mx-auto" />
            <p className="my-4">Spring Boot</p>
          </div>
          <div className="hover:scale-125 duration-500">
            <img src={Node} alt="NodeJs" className="w-20 h-20 mx-auto" />
            <p className="my-4">NodeJs</p>
          </div>
          <div className="hover:scale-125 duration-500">
            <img src={Reactjs} alt="ReactJs" className="w-20 h-20 mx-auto" />
            <p className="my-4">ReactJs</p>
          </div>
          <div className="hover:scale-125 duration-500">
            <img src={Git} alt="GitAndGitHub" className="w-20 h-20 mx-auto" />
            <p className="my-4">Git</p>
          </div>
          <div className="hover:scale-125 duration-500">
            <img src={SQL} alt="SQL" className="w-25 h-20 mx-auto" />
            <p className="my-4">SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

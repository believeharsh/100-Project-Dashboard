import React from "react";
import { FaLink } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Projects = ({ count , name, image, link, codeLink }) => {
  return (
    <>
    <div className="flex justify-between mx-auto text-white px-5 py-4 border-b-[1px] border-white text-2xl">
      <div className="">{count}</div>
      
      <div className="flex justify-center ">
        <div className="w-[110px] mx-1 ">{name}</div>
      </div>
      <div className="">
        <img
          className="w-[190px] h-[110px] rounded-sm"
          src={`${image}`}
          alt=""
        />
      </div>
      <div className="flex flex-col ">
        <a href={`${link}`} target="blank">
          LInk
        </a>
        <a className="mx-auto mt-2" href={`${link}`} target="blank">
          <FaLink />
        </a>
      </div>
      <div className="flex flex-col ">
        <a href={`${codeLink}`} target="blank">
          Code
        </a>
        <a
          className="mx-auto mt-2"
          href={`${codeLink}`}
          target="blank"
        >
          <FaCode />
        </a>
      </div>
    </div>

    </>
    
  );
};

export default Projects;

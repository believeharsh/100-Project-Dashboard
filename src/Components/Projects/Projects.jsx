import React from "react";
import { FaLink } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Projects = ({ count, name, image, link, codeLink }) => {
  return (
    <>
      <div className="flex justify-between mx-auto text-white px-5 py-4 text-2xl hover:border-gray-600 hover:border-[0.1px] hover:rounded-xl">
        <div className="flex gap-[52px] cursor-pointer">
          <div className="">{count + "."}</div>

          {/* <div className="flex justify-center ">
            <div className="w-[110px] mx-1 cursor-pointer">{name}</div>
          </div> */}
          <div class="relative flex justify-center ">
            <span class=" z-10 w-[110px] mx-1 cursor-pointer group">
              {name}
              <div class="absolute inset-x-0  h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-full"></div>
            </span>
          </div>
        </div>

        <div className="rounded-xl p-[5.5px] border-gray-500 border-double border-[1.8px]">
          <img
            className="w-[260px] h-[120px] rounded-sm "
            src={`${image}`}
            alt=""
          />
        </div>
        <div className="flex gap-[52px]">
          <div className="flex flex-col ">
            <a href={`${link}`} target="_blank" className="relative">
            <span class=" z-10 w-[110px] mx-1 cursor-pointer group">
              Link
              <div class="absolute inset-x-0  h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-full"></div>
            </span>
            </a>
            <a className="mx-auto mt-2" href={`${link}`} target="_blank">
              <FaLink />
            </a>
          </div>
          <div className="flex flex-col ">
            <a href={`${codeLink}`} target="_blank" className="relative">
            <span class=" z-10 w-[110px] mx-1 cursor-pointer group">
              Code
              <div class="absolute inset-x-0  h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-full"></div>
            </span>
            </a>
            <a className="mx-auto mt-2" href={`${codeLink}`} target="_blank">
              <FaCode />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

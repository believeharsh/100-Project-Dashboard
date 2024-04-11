import React from "react";
import { FaLink } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
const CommonProjectDiv = ({ ProjectData }) => {
  return (
    <>
      <div className="">
        {ProjectData.map((projects) => {
          return (
            <div className="flex justify-between mx-auto text-white px-5 py-4 border-b-[1px] border-white text-2xl">
              <div className="">{projects.count}</div>
              <div className="flex justify-center ">
              <div className="w-[110px] mx-1 ">{projects.name}</div>
           </div>
              <div className="">
                <img
                  className="w-[190px] h-[110px] rounded-sm"
                  src={`${projects.image}`}
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
              <a href={`${projects.link}`} target="blank">LInk</a>
              <a className="mx-auto mt-2" href={`${projects.link}`} target="blank"><FaLink/></a>
        
             
              </div>
              <div className="flex flex-col "> 
              <a href={`${projects.codelink}`} target="blank">Code</a>
              <a className="mx-auto mt-2" href={`${projects.codelink}`} target="blank"><FaCode/></a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommonProjectDiv;

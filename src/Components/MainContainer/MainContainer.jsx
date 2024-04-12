import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProjectContainer from "../ProjectContainer/ProjectContainer";


const MainContainer = () => {
  return (
    <>
      <div className="">
        <Navbar className="" />

        <div className="relative top-[36px] left-0 w-full flex overflow-visible ">
          <Sidebar className="h-screen pt-2" />
          <ProjectContainer className="scrollbar mt-3"/>
        </div>
      </div>
    </>
  );
};

export default MainContainer;

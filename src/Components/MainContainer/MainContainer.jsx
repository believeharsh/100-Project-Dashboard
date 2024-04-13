import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Fotter from "../Fotter/Fotter";

const MainContainer = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="relative top-[36px] left-0 w-full flex overflow-visible ">
          <Sidebar className="" />
          <ProjectContainer />
        </div>
        
      </div>
    </>
  );
};

export default MainContainer;

import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

const MainContainer = () => {
  return (
    <>
      <div className="">
        <Navbar />

        <div className="top-12 left-0 w-full flex overflow-visible">
          <Sidebar className="h-screen overflow-y-auto" />
          <ProjectContainer className="overflow-auto"/>
        </div>
      </div>
    </>
  );
};

export default MainContainer;

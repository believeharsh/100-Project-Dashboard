import React from "react";
import CommonProjectDiv from "../CommonProject/CommonProjectDiv";
import ProjectData from "../ProjectsData/ProjectsData";

const ProjectContainer = () => {
  return (
    <>
      <div className="flex-1 bg-slate-900 h-full border-white border-[1px] rounded-xl">
        <div className="m-[10px]  ml-2 mt-2">
          <CommonProjectDiv ProjectData={ProjectData}/>
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;

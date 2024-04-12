import React from "react";
import ProjectsList from "../ProjectsList/ProjectsList";
const ProjectContainer = () => {
  return (
    <>
      <div className=" bg-slate-900 h-full border-white border-[1px] rounded-l-xl  scrollbar  w-2 flex-1 overflow-y-auto ml-[180px] ">
        <div className="m-[10px]  ml-2 mt-2">
          <ProjectsList />
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;

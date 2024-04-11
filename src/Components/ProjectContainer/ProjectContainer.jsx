import React from "react";
import ProjectsList from "../ProjectsList/ProjectsList";
const ProjectContainer = () => {
  return (
    <>
      <div className="flex-1 bg-slate-900 h-full border-white border-[1px] rounded-xl ">
        <div className="m-[10px]  ml-2 mt-2">
          <ProjectsList />
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;

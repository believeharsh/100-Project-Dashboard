import React from "react";
import ProjectData from "../ProjectsData/ProjectsData";

import Projects from "../Projects/Projects";
const ProjectsList = () => {
  return (
    <>
      <div className="">
        {ProjectData.map((projects) => (
          <Projects
            count={projects.count}
            key={projects.id}
            name={projects.name}
            image={projects.image}
            link={projects.link}
            codeLink={projects.codeLink}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsList;

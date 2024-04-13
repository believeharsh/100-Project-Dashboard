
import React, { useState } from "react";
import ProjectData from "../ProjectsData/ProjectsData";


import Projects from "../Projects/Projects";

const ProjectsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  // Logic to calculate the index of the first and last project for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = ProjectData.slice(indexOfFirstProject, indexOfLastProject);

  // Function to handle page navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="">
        {currentProjects.map((project) => (
          <Projects
            key={project.id}
            count={project.count}
            name={project.name}
            image={project.image}
            link={project.link}
            codeLink={project.codeLink}
          />
        ))}
      </div>
      {/* Pagination buttons */}
      <div className="flex items-center justify-center border-white border-[1px] rounded-xl px-3 py-2 mx-auto gap-2 mt-2">
        {Array.from({ length: Math.ceil(ProjectData.length / projectsPerPage) }).map((_, index) => (
          <div className=" text-2xl  rounded-full h-10 w-10 flex justify-center items-center border-white border-[1px] text-white hover:bg-gray-200 hover:text-black font-thin  " key={index} onClick={() => paginate(index + 1)}  >
        
          <button className="">
            {index + 1}
          </button>
          
        
          </div>
        
        ))}
      </div>
    </>
  );
};

export default ProjectsList;

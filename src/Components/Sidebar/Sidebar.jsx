import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-[180px] bg-slate-900 top-11 left-0 h-[100vh]  pt-2 fixed  ">
        <div className="mx-2 flex flex-col items-center text-white mt-2">
          <div className="border-white border-dashed border-[1.5px] px-2 py-2 rounded-xl font-thin font-xl">
            Here I've added 100 project with their live links and source code
            too. you can follow this page while learning basics of HTML, CSS, JS
            , React, Tailwind CSS, basic of Dom , folder structure.
            Make Sure that you maintain healthy consistency and go with foucused learining. Definatily you'll stuck on bugs while buildings such projects so don't let them demotivate you. 
          </div>
          <div className="border-white border-dashed border-[1.5px] px-2 py-2 rounded-xl font-thin font-xl mt-2">
          Keep Hustling and Keep Shining :)
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import ProjectContainer from '../ProjectContainer/ProjectContainer'

const MainContainer = () => {
  return (
    <>
    <div className="">
      <Navbar/>
      <div className="fixed top-0 left-0 h-full w-full flex">
        <Sidebar/>
        <ProjectContainer/>
      </div>
    </div>
     
    </>
  )
}

export default MainContainer

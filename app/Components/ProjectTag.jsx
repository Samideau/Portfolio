import React from 'react'

const ProjectTag = ({name, onClicked, isSelected}) => {
  const buttonStyle = isSelected ? "text-white border-cyan-400" : "text-[#ADB7BE] border-slate-600 hover:border-white"
  
  return (
    <button 
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 md:text-xl cursor-pointer`}
      onClick={() => onClicked(name)}
    >
		  {name}
		</button>
  )
}

export default ProjectTag
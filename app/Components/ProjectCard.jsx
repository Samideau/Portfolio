import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, languages, webUrl, previewUrl}) => {
  return (
    <div>
      <div 
				className="mt-2 h-66 sm:h-100 md:h-60 xl:h-75 2xl:h-92 rounded-t-xl relative group" 
				style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover"}}
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
					<Link href={webUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
					</Link>
					<Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
					</Link>
				</div>
      </div>
			<div className="text-white rounded-b-xl mt-1 bg-[#181818] py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{`[${languages}] ${title}`}</h5>
				<p className="text-[#ADB7BE]">{description}</p>
			</div>
		</div>
  )
}

export default ProjectCard
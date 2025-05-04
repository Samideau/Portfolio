"use client"
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id="home">
			<div className="grid grid-cols-1 md:grid-cols-12">
				<div className="col-span-7 place-self-center text-center md:text-left order-last md:order-first">
					<h1 className="h-15 lg:h-21 text-white mb-4 text-3xl lg:text-5xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-lime-500">
							Hello, I'm {" "}
						</span>
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								'Samuel',
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								'an Unity Game Developer',
								1000,
								'an Unreal Game Developer',
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className=" text-[#ADB7BE] text-base md:text-lg mb-6 lg:text-xl text-justify">
						Almost born with a controller in hands, my passion for games hasn't stopped after all these years.
						Now I develop them, so if you have a dream game idea, I'm here to bring it to reality!
					</p>
					<div>
						<button className="px-6 py-3 w-full md:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-300 via-blue-400 to-lime-500 hover:bg-slate-200 text-white">
							Contact Me 
						</button>
						<button className="px-1 py-1 w-full md:w-fit rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-lime-500 hover:bg-slate-800 text-white mt-3">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</button>
					</div>
				</div>
				<div className="col-span-5 place-self-center mt-4 lg:mt-0 order-first md:order-last">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
						<Image 
							src="/Images/GameController.png" 
							alt="Desc Image" 
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300} 
							height={300}
						/>
					</div>
				</div>
			</div>
    </section>
  )
}

export default HeroSection
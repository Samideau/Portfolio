"use client"
import Link from "next/link";
import React, { useState, useRef } from 'react';
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useIntersectionObserver } from 'react-visible-observer';

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Skills",
        path: "#skills",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const ref = useRef(null);
    const onVisibilityChange = (isVisible) => {
        //console.log(`The element is now ${isVisible ? 'visible' : 'hidden'}`);
        setNavbarOpen(false)
    };

    useIntersectionObserver(ref, onVisibilityChange);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] opacity-100">
			<div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link 
				href={"/"} 
				className="text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-lime-500 font-semibold"
				>
					Samido
				</Link>
				<div className="mobile-menu block md:hidden">
					{
						!navbarOpen ? (
							<button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
								<Bars3Icon className="h-5 w-5"/>
							</button>
						) : (
							<button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
								<XMarkIcon className="h-5 w-5"/>
							</button>
						)
					}
				</div>
				<div ref={ref} className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{
							navLinks.map((link, index) => (
								<li key={index}>
									<NavLink href={link.path} title={link.title} />
								</li>
								))
						}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar
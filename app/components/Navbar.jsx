"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
// import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-gray-500">
			<div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
				<Link
					href={"/"}
					className="text-2xl md:text-2xl text-slate-300 font-sans font-semibold border-b border-b-blue-300"
				>
					Zakari
				</Link>
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							{/*			<Bars3Icon className="h-5 w-5" />
							 */}{" "}
							<CiMenuFries />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							{/*							<XmarkIcon className="h-5 w-5" />
							 */}{" "}
							<IoCloseOutline />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar;

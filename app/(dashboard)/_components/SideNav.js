"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// Icons
import { FiMinimize2 } from "react-icons/fi";
import { FaUpload, FaHandHoldingHeart, FaShieldAlt } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";

function SideNav({ navVisible, toggleNav }) {
	const menuList = [
		{
			id: 1,
			name: "Upload",
			icon: <FaUpload />,
			path: "/uploads",
		},
		{
			id: 2,
			name: "Files",
			icon: <LuFiles />,
			path: "/files",
		},
		{
			id: 3,
			name: "Support",
			icon: <FaHandHoldingHeart />,
			path: "/support",
		},
		{
			id: 4,
			name: "Upgrade",
			icon: <FaShieldAlt />,
			path: "/upgrade",
		},
	];
	const router = useRouter();
	const pathname = usePathname();
	const [activeIndex, setActiveIndex] = useState(0);
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		window.addEventListener("load", setIsLoading(false));
		return () => window.removeEventListener("load", setIsLoading(false));
	}, []);

	useEffect(() => {
		pathname &&
			setActiveIndex(
				menuList.findIndex((elem) => elem?.path === pathname)
			);
	}, [pathname]);

	const navClicked = (item, index) => {
		setActiveIndex(index);
		router.push(item.path);
	};

	return !isLoading ? (
		<div className="shadow-sm border-r h-full">
			<div className="p-5 border-b flex justify-between">
				<Image
					src="/logo.svg"
					alt="logo"
					width={50}
					height={50}
					onClick={() => router.push("/")}
					className="hover:cursor-pointer"
				/>
				{navVisible ? (
					<div className="hover:cursor-pointer p-2 my-auto">
						<FiMinimize2
							size={25}
							className="text-primary"
							onClick={() => toggleNav(false)}
						/>
					</div>
				) : (
					""
				)}
			</div>
			<div className="flex flex-col float-left w-full">
				{menuList.map((item, index) => (
					<button
						className={`flex gap-2 p-4 px-4 items-center
          hover:bg-gray-200 w-full text-gray-600
        ${activeIndex == index ? "bg-blue-50 text-primary" : null}`}
						key={item.id}
						onClick={(e) => {
							e.preventDefault();
							navClicked(item, index);
						}}
					>
						{item.icon}
						<h2>{item.name}</h2>
					</button>
				))}
			</div>
		</div>
	) : (
		// Skeleton
		<div className="shadow-sm border-r h-full">
			<div className="p-4 border-b flex justify-between">
				<img
					className="rounded-full bg-gray-300 animate-pulse"
					width={60}
					height={60}
					alt=""
				/>
			</div>
			<ul className="flex flex-col gap-6 w-full p-4">
				{menuList.map((item) => (
					<li className="flex gap-4" id={item?.id}>
						<img
							className="rounded-full bg-gray-300 animate-pulse"
							width={30}
							height={30}
							alt=""
						/>
						<img
							className="rounded-full bg-gray-300 animate-pulse"
							width={200}
							height={30}
							alt=""
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SideNav;

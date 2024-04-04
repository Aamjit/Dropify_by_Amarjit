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

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading());
    return () => window.removeEventListener("load", handleLoading());
  }, []);

  const navClicked = (item, index) => {
    setActiveIndex(index);
    router.push(item.path);
  };

  useEffect(() => {
    pathname &&
      setActiveIndex(menuList.findIndex((elem) => elem?.path === pathname)); // elem?.path == pathname
  }, [pathname]);

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
        />
      </div>
      <div className="flex flex-col gap-6 w-full p-4">
        <div className="flex gap-4">
          <img
            className="rounded-full bg-gray-300 animate-pulse"
            width={30}
            height={30}
            alt="skeleton"
          />
          <img
            className="rounded-full bg-gray-300 animate-pulse"
            width={200}
            height={30}
            alt="skeleton"
          />
        </div>
        <div className="flex gap-4">
          <img
            className="rounded-full bg-gray-300 animate-pulse"
            width={30}
            height={30}
            alt="skeleton"
          />
          <img
            className="rounded-full bg-gray-300 animate-pulse"
            width={200}
            height={30}
            alt="skeleton"
          />
        </div>
        <div className="flex gap-4">
          <img
            className="rounded-full bg-gray-300 animate-pulse"
            width={30}
            height={30}
            alt="skeleton"
          />
          <img
            className="rounded-full bg-gray-300 animate-pulse"
            width={200}
            height={30}
            alt="skeleton"
          />
        </div>
        <div className="flex gap-4">
          <img
            className="rounded-full bg-gray-300 animate-pulse"
            width={30}
            height={30}
            alt="skeleton"
          />
          <img
            className="rounded-full bg-gray-300 animate-pulse"
            width={200}
            height={30}
            alt="skeleton"
          />
        </div>
      </div>
    </div>
  );
}

export default SideNav;

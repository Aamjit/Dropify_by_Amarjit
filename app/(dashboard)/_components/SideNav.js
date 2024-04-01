"use client";

import { CloudUpload, FilesIcon, HelpingHand, ShieldPlusIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: CloudUpload,
      path: "/uploads",
    },
    {
      id: 2,
      name: "Files",
      icon: FilesIcon,
      path: "/files",
    },
    {
      id: 3,
      name: "Support",
      icon: HelpingHand,
      path: "/support",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldPlusIcon,
      path: "/upgrade",
    },
  ];

  const router = useRouter();
  let [activeIndex, setActiveIndex] = useState(0);

  const navClicked = (item,index) => {
    setActiveIndex(index);
    // console.log(item,index);
    router.push(item.path);
  };

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-b">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            className={`flex gap-2 p-4 px-4
          hover:bg-gray-200 w-full text-gray-600
        ${activeIndex == index ? "bg-blue-50 text-primary" : null}`}
            key={item.id}
            onClick={()=>navClicked(item,index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;

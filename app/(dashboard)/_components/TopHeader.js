"use client";
import { UserButton } from "@clerk/nextjs";
import {
  AlignJustify,
  CroissantIcon,
  CrossIcon,
  Minimize2,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SideNav from "./SideNav";

function TopHeader() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div
      className="flex p-5 border-b items-center justify-between
    md:justify-end"
    >
      <AlignJustify
        className="hover:cursor-pointer text-primary md:hidden"
        onClick={toggleNav}
      />
      {navVisible && (
        <div className="w-64 flex-col align-middle fixed inset-y-0 bg-slate-50 inset-x-0 z-0 flex md:hidden">
          <div className="hover:cursor-pointer w-full h-14 p-4">
            <Minimize2
              className="mx-auto my-auto text-primary h-full"
              onClick={toggleNav}
            />
          </div>
          <SideNav />
        </div>
      )}
      {!navVisible && (
        <Image src={"/logo.svg"} width={50} height={50} className="md:hidden" />
      )}
      <UserButton />
    </div>
  );
}

export default TopHeader;

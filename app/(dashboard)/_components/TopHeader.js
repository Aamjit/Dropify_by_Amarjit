"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import SideNav from "./SideNav";
import { IoMenu } from "react-icons/io5";

function TopHeader() {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div
      className="flex p-5 border-b items-center justify-between
    md:justify-end"
    >
      <IoMenu
        className="hover:cursor-pointer text-primary md:hidden" size={25}
        onClick={() => setNavVisible(!navVisible)}
      />
      {navVisible ? (
        <div className="w-64 flex-col align-middle fixed inset-y-0 bg-slate-50 inset-x-0 z-0 flex md:hidden">
          <SideNav navVisible={navVisible} toggleNav={setNavVisible} />
        </div>
      ) : (
        ""
      )}
      {!navVisible && (
        <Image
          src={"/logo.svg"}
          width={50}
          height={50}
          alt="Logo"
          className="md:hidden"
        />
      )}
      <UserButton />
    </div>
  );
}

export default TopHeader;

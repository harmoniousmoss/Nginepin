"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

// Toggle menu start (Hamburger)
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  // Toggle menu end (Hamburger)

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
        >
          Nginepin your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 border-[1px] md:py-1 md:px-2 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          {/* React Icons */}
          <AiOutlineMenu />
        </div>
        <div className="hidden md:block">
          {/* Components */}
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div className="absolute shadow-sm rounded-xl w-[400vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-start">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

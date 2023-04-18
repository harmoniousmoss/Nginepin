"use client";

import { BiSearch } from "react-icons/bi"

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-start justify-between">
        <div className="px-6 text-sm font-semibold">Anywhere</div>
        <div className="hidden px-6 text-sm font-semibold border-x-[1px] sm:block flex-1 text-center">
          Any Week
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
            <div className="hidden sm:block">Add Guests</div>
            <div className="p-2 text-white bg-indigo-500 rounded-full">
                <BiSearch size={18}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

import Link from "next/link";
import React from "react";
import { Subtalkz } from "../interface";

const SubtalkzItem = ({ item }: { item: Subtalkz }) => {
  return (
    <div
      
      className="cursor-pointer transition-all duration-100 hover:-translate-y-1 text-center  text-xs text-gray-400 font-semibold sm:text-sm bg-[#1E293B] border-t rounded-xl whitespace-nowrap border-gray-700 md:text-base px-2 md:px-4 p-[4px] sm:py-2 shadow-md"
    >
      <Link href={`/explore/${item.topic}`} legacyBehavior>
        <span>
        t/{item.topic}
        </span>
        </Link>
    </div>
  );
};

export default SubtalkzItem;

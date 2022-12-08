import React from "react";
import { Subtalkz } from "../interface";
import SubtalkzItem from "./SubtalkzItem";

const SubtalkzList = ({ items }: { items: Subtalkz[] }) => {
  return (
    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-4">
      {items?.map((item: Subtalkz, i: number) => (
        <SubtalkzItem key={i} item={item} />
      ))}
    </div>
  );
};

export default SubtalkzList;

import { DotSpinner } from "@uiball/loaders";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center pt-4">
      <DotSpinner size={40} speed={0.9} color="#0EA5E9" />
    </div>
  );
};

export default Loader;

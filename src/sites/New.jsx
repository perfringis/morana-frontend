import React from "react";

import {
  CodeBracketSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const New = () => {
  return (
    <div>
      <div className="h-screen w-80 bg-charleston_green">
        <div className="pt-14">
          <div className="mx-6 flex flex-row items-center justify-center px-6">
            <div className="mr-6 h-6 w-6 bg-fiery_rose-0" />
            <div className="text-xl text-white_custom">SMITE</div>
            <div className="ml-auto">
              <CodeBracketSquareIcon className="h-6 w-6 cursor-pointer text-roman_silver transition hover:text-white_custom" />
            </div>
          </div>
          <div className="mx-6 mt-12 flex h-12 flex-row items-center justify-center bg-onyx">
            <div className="mr-6 ml-6 h-6 w-6 bg-turquoise-0" />
            <div className="text-base text-white_custom">SMITE</div>
            <div className="ml-auto pr-6">
              <ChevronDownIcon className="h-6 w-6 cursor-pointer text-roman_silver transition hover:text-white_custom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

import React from "react";

import {
  CubeIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";

const Test = () => {
  return (
    <div className="h-screen w-64 rounded-md bg-gray-900">
      <div className="px-6 pt-8">
        <div className="flex flex-row items-center justify-between">
          <a
            href="#"
            className="flex items-center justify-center rounded bg-blue-600 p-1.5"
          >
            <CubeIcon
              className="h-5 w-5 stroke-current text-white"
              fill="none"
            />
          </a>
          <button className="flex items-center justify-center rounded bg-gray-800 p-0.5">
            <ArrowLeftIcon
              className="h-5 w-5 stroke-current text-white"
              fill="none"
            />
          </button>
        </div>
      </div>
      <div className="px-6 pt-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <MagnifyingGlassIcon
              className="h-5 w-5 stroke-current text-gray-500"
              fill="none"
            />
          </div>
          <input
            type={"text"}
            className={
              "w-full rounded bg-gray-800 px-4 py-2.5 pl-8 text-xs font-light text-gray-400 placeholder-gray-500"
            }
            placeholder={"Search"}
          />
        </div>
      </div>
      <div className="px-6 pt-4">
        <hr className="border-gray-700"></hr>
      </div>
      <div className="px-6 py-4">
        <ul className="flex flex-col space-y-2">
          <li className="relative text-gray-500 hover:text-white">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <AcademicCapIcon className="h-5 w-5 stroke-current" />
            </div>
            <a
              href="#"
              className="inline-block w-full rounded py-2 pl-8 pr-4 text-sm hover:bg-gray-800"
            >
              Dashboard
            </a>
          </li>
          <li className="">
            <div className="relative text-gray-500 hover:text-white flex justify-between">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <AdjustmentsHorizontalIcon className="h-5 w-5 stroke-current" />
              </div>
              <a
                href="#"
                className="inline-block w-full rounded py-2 pl-8 pr-4 text-sm hover:bg-gray-800"
              >
                Content
              </a>
            </div>
          </li>
          <li className="relative text-gray-500 hover:text-white">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <AdjustmentsVerticalIcon className="h-5 w-5 stroke-current" />
            </div>
            <a
              href="#"
              className="inline-block w-full rounded py-2 pl-8 pr-4 text-sm hover:bg-gray-800"
            >
              Design
            </a>
          </li>
          <li className="relative text-gray-500 hover:text-white">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <ArchiveBoxArrowDownIcon className="h-5 w-5 stroke-current" />
            </div>
            <a
              href="#"
              className="inline-block w-full rounded py-2 pl-8 pr-4 text-sm hover:bg-gray-800"
            >
              Market & Sell
            </a>
          </li>
          <li className="relative text-gray-500 hover:text-white">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <ArchiveBoxXMarkIcon className="h-5 w-5 stroke-current" />
            </div>
            <a
              href="#"
              className="inline-block w-full rounded py-2 pl-8 pr-4 text-sm hover:bg-gray-800"
            >
              Reporting
            </a>
          </li>
          <li className="relative text-gray-500 hover:text-white">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <ArchiveBoxIcon className="h-5 w-5 stroke-current" />
            </div>
            <a
              href="#"
              className="inline-block w-full rounded py-2 pl-8 pr-4 text-sm hover:bg-gray-800"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Test;

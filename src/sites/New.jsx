import React from "react";

import {
  CodeBracketSquareIcon,
  ChevronDownIcon,
  TvIcon,
  HeartIcon,
  VideoCameraIcon,
  DocumentDuplicateIcon,
  ListBulletIcon,
  ChartBarIcon,
  TrophyIcon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  BeakerIcon,
  UserCircleIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const New = () => {
  return (
    <div className="flex flex-row">
      <div className="flex h-screen w-80 flex-col bg-charleston_green">
        <div className="mx-6 mt-12 flex h-12 flex-row items-center justify-center px-6 transition hover:bg-onyx">
          <div className="mr-6 h-6 w-6 bg-fiery_rose-0" />
          <div className="text-xl text-white_custom">SMITE</div>
          <div className="ml-auto">
            <CodeBracketSquareIcon className="h-6 w-6 cursor-pointer text-roman_silver transition hover:text-white_custom" />
          </div>
        </div>
        <div className="mx-6 mt-12 flex h-12 flex-row items-center justify-center bg-onyx">
          <div className="mx-6 h-6 w-6 bg-turquoise-0" />
          <div className="text-base text-white_custom">SMITE</div>
          <div className="ml-auto pr-6">
            <ChevronDownIcon className="h-6 w-6 cursor-pointer text-roman_silver transition hover:text-white_custom" />
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-center gap-y-4">
          <div className="mx-6 flex cursor-pointer flex-row items-center justify-start text-roman_silver transition hover:text-white_custom">
            <div className="pr-6 pl-6">
              <TvIcon className="h-6 w-6" />
            </div>
            <div className="text-base">Desktop App</div>
          </div>
          <div className="mx-6 flex cursor-pointer flex-row items-center justify-start text-roman_silver transition hover:text-white_custom">
            <div className="pr-6 pl-6">
              <HeartIcon className="h-6 w-6" />
            </div>
            <div className="text-base">Support Us</div>
          </div>
          <div className="mx-6 flex cursor-pointer flex-row items-center justify-start text-roman_silver transition hover:text-white_custom">
            <div className="pr-6 pl-6">
              <VideoCameraIcon className="h-6 w-6" />
            </div>
            <div className="text-base">Live Game</div>
          </div>
          <div className="mx-6 flex cursor-pointer flex-row items-center justify-start text-roman_silver transition hover:text-white_custom">
            <div className="pr-6 pl-6">
              <DocumentDuplicateIcon className="h-6 w-6" />
            </div>
            <div className="text-base">Multi Search</div>
          </div>
          <div className="mx-6 flex cursor-pointer flex-row items-center justify-start text-roman_silver transition hover:text-white_custom">
            <div className="pr-6 pl-6">
              <ListBulletIcon className="h-6 w-6" />
            </div>
            <div className="text-base">Tier List</div>
          </div>
          <div className="mx-6 flex cursor-pointer flex-row items-center justify-start text-roman_silver transition hover:text-white_custom">
            <div className="pr-6 pl-6">
              <ChartBarIcon className="h-6 w-6" />
            </div>
            <div className="text-base">Leader Boards</div>
          </div>
          <div className="mx-6 flex cursor-pointer flex-row items-center justify-start text-roman_silver transition hover:text-white_custom">
            <div className="pr-6 pl-6">
              <TrophyIcon className="h-6 w-6" />
            </div>
            <div className="text-base">Champions</div>
          </div>
          <div className="mx-6 flex cursor-pointer flex-row items-center justify-start text-roman_silver transition hover:text-white_custom">
            <div className="pr-6 pl-6">
              <WrenchScrewdriverIcon className="h-6 w-6" />
            </div>
            <div className="text-base">Pro Builds</div>
          </div>
          <div className="mx-6 flex cursor-pointer flex-row items-center justify-start text-roman_silver transition hover:text-white_custom">
            <div className="pr-6 pl-6">
              <Cog6ToothIcon className="h-6 w-6" />
            </div>
            <div className="text-base">Settings</div>
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-6">
          <div className="mx-6 flex h-12 cursor-pointer flex-row items-center justify-start bg-onyx_yellow text-base text-banana_mania">
            <div className="px-6">
              <BeakerIcon className="h-6 w-6" />
            </div>
            <div className="">Get God Pro</div>
          </div>
          <div className="flex h-20 flex-row items-center justify-start gap-x-6 bg-onyx px-6 text-base">
            <div className="cursor-pointer text-roman_silver transition hover:text-white_custom">
              <UserCircleIcon className="h-8 w-8" />
            </div>
            <div className="text-white_custom">Guest Account</div>
            <div className="ml-auto cursor-pointer text-roman_silver transition hover:text-white_custom">
              <EllipsisHorizontalIcon className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen bg-dark_gunmetal">
        <div className="mt-12 ml-88 flex h-12 w-156 flex-row items-center bg-gunmetal">
          <div className="flex h-12 w-24 flex-row items-center justify-evenly bg-dark_purple text-base text-rich_lavender">
            <div className="">EUW</div>
            <div className="">
              <ChevronDownIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
          <div className="flex h-full w-full flex-row items-center justify-center">
            <div className="pl-6 text-base text-white_custom">
              Search your hero name
            </div>
            <div className="ml-auto pr-6">
              <MagnifyingGlassIcon className=" h-6 w-6 text-roman_silver" />
            </div>
          </div>
        </div>
        <div className="pt-24 pl-48">
          <div className="h-6 text-xs flex flex-row bg-gunmetal text-white_custom items-center justify-center">
            <div>S9</div>
            <div>Challenger</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function ProjectFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: any) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex flex-col justify-start items-center gap-8">
      <div className="w-full justify-start items-center gap-5 lg:gap-8 flex flex-col lg:flex-row">
        {/* Search By Name */}
        <div className="grow w-full shrink basis-0 justify-start items-start gap-2 flex flex-col ">
          <Label className="min-w-fit text-white text-base font-semibold font-['Sofia Sans'] uppercase leading-none ">
            Search by name:
          </Label>
          <Input
            placeholder="Search by Name"
            className="grow shrink basis-0 px-4 py-2 bg-stone-900 rounded-lg border border-neutral-600 justify-start items-center gap-2 flex h-[180px]"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/* <div className="flex w-full lg:w-[auto] gap-[20px] lg:gap-8"> */}
        {/* Year */}
        {/* <div className="w-full lg:w-[auto] justify-start items-start lg:items-center gap-2 flex flex-col lg:flex-row">
            <Label className="text-white text-base font-semibold font-['Sofia Sans'] uppercase leading-none">
              Year:
            </Label>
            <div className="w-full lg:w-[auto]  px-4 py-2 bg-stone-900 rounded-lg border border-neutral-600 justify-start items-center gap-2 flex">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  2023
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>2023</DropdownMenuItem>
                  <DropdownMenuItem>2024</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div> */}

        {/* Node Selection */}
        {/* <div className="w-full lg:w-[auto] justify-start items-start lg:items-center gap-2 flex flex-col lg:flex-row">
            <div className="text-white text-base font-semibold font-['Sofia Sans'] uppercase leading-none">
              Node:
            </div>
            <div className="w-full lg:w-[auto] px-4 py-2 bg-stone-900 rounded-lg border border-neutral-600 justify-start items-center gap-2 flex">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none ">
                  No Node Selected
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Distribution Technologies</DropdownMenuItem>
                  <DropdownMenuItem>Health</DropdownMenuItem>
                  <DropdownMenuItem>Finance</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default ProjectFilters;

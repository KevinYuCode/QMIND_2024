"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import PENCIL from "@/../assets/icons/pencil.png";
import Image from "next/image";
import { useGlobalContext } from "@/Context/store";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import LOADING from "@/../assets/icons/loading.png";
import { cn } from "@/lib/utils";
function EditProject({ project }: any) {
  const {
    handleSaveProject,
    showSaveChanges,
    setShowSaveChanges,
    isEditing,
    setIsEditing,
  } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleEditState = (e: any) => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }
    setIsLoading(true);
    setTimeout(async () => {
      await handleSaveProject(project);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed right-[20px] bottom-[20px]">
      <Button
        variant={"ghost"}
        disabled={isLoading}
        className={cn(`w-auto h-auto p-[15px] bg-[#1e1e1e] rounded-[50%] shadow-lg border-[2px] border-[#4E4E4E] z-[2]`, {"border-[#f0b542]": isEditing})}
        onClick={(e) => {
          handleEditState(e);
        }}
      >
        {isLoading && (
          <svg
            className="animate-spin  h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && (
          <Image
            src={PENCIL}
            height={25}
            width={25}
            alt="pencil"
            className="opacity-[80%] "
          />
        )}
      </Button>
    </div>
  );
}

export default EditProject;

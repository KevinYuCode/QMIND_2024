"use client";
import React, { useEffect } from "react";
import { kontrapunkt } from "../../font";
import { useGlobalContext } from "@/Context/store";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

function ProjectHeader({ project }: any) {
  const {
    isEditing,
    projectTitle,
    setProjectTitle,
    category,
    setCategory,
    published,
    setPublished,
  } = useGlobalContext();

  useEffect(() => {
    setProjectTitle(project.projectTitle);
    setCategory(project.category);
    setPublished(project.published);
  }, [project]);
  return (
    <>
      {isEditing && (
        <div className="w-full flex justify-end items-center gap-[15px] pb-[20px]">
          <Label htmlFor="publish">
            {published ? "Published" : "Unpublished"}
          </Label>
          <Switch
            checked={published}
            onClick={() => setPublished(!published)}
            id="publish"
          />
        </div>
      )}
      <div className="users-title flex flex-col lg:flex-row gap-[5px] lg:gap-[20px] mb-[20px] lg:mb-0">
        {!isEditing ? (
          <h1
            className={`${kontrapunkt.className} !text-xl md:!text-4xl self-start`}
          >
            {projectTitle}
          </h1>
        ) : (
          <div className="w-full">
            <Input
              className={`!text-xl md:!text-4xl ${kontrapunkt.className}`}
              placeholder="Project Title"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </div>
        )}

        {!isEditing ? (
          <p className="min-w-fit self-start relative top-[5px]">{category}</p>
        ) : (
          <div className="w-auto">
            <Input
              className={`${kontrapunkt.className}  text-[#3F69FF]`}
              placeholder="Project Title"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              maxLength={30}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectHeader;

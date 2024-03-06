import Link from "next/link";
import React from "react";
import { Card, CardContent } from "./card";
import Image from "next/image";
import plasma from "../../../assets/plasma.png";
import { Label } from "./label";

function ProjectCard({ project, previewMap }: any) {
  return (
    <Link href={`/project/${project?.id}`}>
      <Card className="bg-stone-900 rounded-2xl border border-neutral-600 gap-2 relative ">
        <CardContent className="flex flex-roww-full h-full items-start py-8 gap-[25px]">
          <div className="hidden xl:flex flex-row  max-w-[400px] h-[253px] w-[50%] relative items-center justify-center">
            {project.projectImages.length > 0 ? (
              <Image
                src={previewMap[project.projectImages[0]]}
                alt="Preview"
                className="object-cover object-center w-[95%] h-[85%] border border-slate-700 rounded-[20px]"
                unoptimized
                fill
              />
            ) : (
              <Image
                src={plasma}
                alt="Preview"
                className="object-cover object-center w-[95%] h-[85%] border border-slate-700 rounded-[20px]"
                fill
              />
            )}
          </div>

          <div className="flex flex-col md:w-[50%] flex-grow overflow-auto items-start border-neutral-600 ">
            <div className="font-kontrapunkt text-2xl text-left bg-stone-900 flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-[15px] lg:mb-0 lg:gap-[30px]">
              {/* Project Title */}
              <span>{project?.projectTitle}</span>
              {/* Category */}
              <Label className="text-[#3F69FF]  pt-[10px] lg:pt-[0] text-lg  no-underline hover:opacity-60  min-w-fit self-start">
                {project?.category}
              </Label>
            </div>
            <div className="flex flex-row space-x-2 md:mb-4 pt-2">
              {project &&
                project?.tags?.map((tag: any, key: any) => (
                  <span
                    key={key}
                    className="bg-[#1E1E1E] text-white text-xs px-4 py-1 rounded-2xl border border-[#6E6E6E] font-kontrapunkt"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <div className="hidden md:flex flex-col items-start gap-[24px]">
              {/* Short Description */}
              <div>
                <h3 className="text-[#6E6E6E] text-[16px] font-[600px] mb-[8px]">
                  SHORT PROJECT DESCRIPTION
                </h3>
                <div>
                  <p className="text-[16px] leading-[20px] description-ellipses">
                    {project?.shortDescription}
                  </p>
                </div>
              </div>
              {/* Real World Impact */}
              <div>
                <h3 className="text-[#6E6E6E] text-[16px] font-[600px] mb-[8px]">
                  REAL WORLD IMPACT - What impact will this project have on the
                  world of AI?
                </h3>
                <div>
                  <p className="text-[16px] leading-[20px] description-ellipses">
                    {project?.impactDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProjectCard;

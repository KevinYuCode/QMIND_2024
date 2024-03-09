"use client";
import React, { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useGlobalContext } from "@/Context/store";
import { cn } from "@/lib/utils";

function InfoTextArea({ project }: any) {
  const {
    isEditing,
    shortDescription,
    impactDescription,
    fullDescription,
    setShortDescription,
    setImpactDescription,
    setFullDescription,
  } = useGlobalContext();

  useEffect(() => {
    if (!project) return;
    setShortDescription(project.shortDescription);
    setImpactDescription(project.impactDescription);
    setFullDescription(project.fullDescription);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);
  return (
    <>
      {/* Short Project Description */}
      <div>
        <h3 className="text-[#6E6E6E] text-[16px] font-[600px] mb-[8px]">
          SHORT PROJECT DESCRIPTION
        </h3>
        {!isEditing ? (
          <div>
            <p className="text-[16px] leading-[20px]">{shortDescription}</p>
          </div>
        ) : (
          <div className="w-full">
            <Textarea
              className={cn(
                "text-[white] text-[16px] font-[600px] mb-[8px] bg-[#161616] border-[#4E4E4E] w-full max-h-[600px] lg:max-h-[500px]"
              )}
              placeholder="Type description here..."
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              maxLength={8000}
            />
          </div>
        )}
      </div>
      {/* Short Project Description */}
      <div>
        <h3 className="text-[#6E6E6E] text-[16px] font-[600px] mb-[8px]">
          REAL WORLD IMPACT - What impact will this project have on the world of
          AI?
        </h3>
        {!isEditing ? (
          <div>
            <p className="text-[16px] leading-[20px]">{impactDescription}</p>
          </div>
        ) : (
          <div className="w-full">
            <Textarea
              className={cn(
                "text-[white] text-[16px] font-[600px] mb-[8px] bg-[#161616] border-[#4E4E4E] w-full max-h-[600px] lg:max-h-[500px]"
              )}
              placeholder="Type description here..."
              value={impactDescription}
              onChange={(e) => setImpactDescription(e.target.value)}
              maxLength={8000}
            />
          </div>
        )}
      </div>

      {/* FULL PROJECT DESCRIPTION */}
      <div>
        <h3 className="text-[#6E6E6E] text-[16px] font-[600px] mb-[8px]">
          FULL PROJECT DESCRIPTION
        </h3>
        {!isEditing ? (
          <div>
            <p className="text-[16px] leading-[20px]">{fullDescription}</p>
          </div>
        ) : (
          <div className="w-full">
            <Textarea
              className={cn(
                "text-[white] text-[16px] font-[600px] mb-[8px] bg-[#161616] border-[#4E4E4E] w-full max-h-[600px] lg:max-h-[500px] min-h-[250px]"
              )}
              placeholder="Type description here..."
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
              maxLength={8000}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default InfoTextArea;

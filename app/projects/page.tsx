import React from "react";
import Container from "../components/Container";
import leadership_image from "../../assets/Leadership_image.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EXAMPLE from "../../assets/Users/example.png";
import rabab_azeem from "../../assets/Headshots/Rabab_Azeem.png";
import olivia_xu from "../../assets/Headshots/Olivia_Xu.png";
import link from "../../public/external_link.png";
import "@/styles/page.scss";
import { kontrapunkt, tradeGothic } from "../font";
import { sofia_sans } from "../font";
import plasma from "../../assets/plasma.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import ProjectFilters from "@/components/ui/projectFilters";
// import { cookies } from "next/headers";
import PLACEHOLDER from "@/../assets/Leadership_image.jpg";
import ProjectCard from "@/components/ui/projectCard";
import { createClient, downloadImage } from "@/utils/supabase/server";
import AddProject from "@/components/AddProject/addProject";
import { Card } from "@/components/ui/card";
export default async function Projects({ props, searchParams }: any) {
  const supabase = createClient();
  // const { data } = await supabase.from("projects").select();
  const { data } = await supabase
    .from("projects")
    .select("*")
    .ilike("projectTitle", `%${searchParams?.search || ""}%`);

  const previewMap = {} as any;

  data?.forEach(async (project) => {
    let previewImage = "";
    if (project?.projectImages.length > 0) {
      const projectImage = await downloadImage(project?.projectImages[0]);
      if (projectImage) {
        previewImage = projectImage.publicUrl;
        previewMap[project?.projectImages[0]] = previewImage;
      }
    }
  });
  const userHasProject = new Set(data?.map((project) => project.pmEmail));
  const userRes = await supabase.auth.getUser();

  let hasProject = false;
  if (userRes && userRes.data?.user?.email)
    hasProject = userHasProject.has(userRes.data.user.email);
  return (
    <Container>
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[60px] lg:gap-[100px] py-[60px]">
        <div className="flex flex-col gap-[20px] w-[90%] lg:w-[60%] lg:max-w-[600px]">
          <h1 className={`${tradeGothic.className} text-6xl font-bold`}>
            Projects
          </h1>
          <p className="text-xl">
            A skilled and engaged team of 4-6 students looking to disrupt
            current industries and practices through artificial intelligence,
            machine learning, and other disruptive technologies.
          </p>
          <p className="text-xl">
            Below you can see the projects we’ve been working on, and click on
            any one to learn more.
          </p>
        </div>
        <div>
          {
            <Image
              src={PLACEHOLDER}
              alt="cool"
              width={490}
              height={377}
              className="rounded-[20px] shadow-xl"
            />
          }
        </div>
      </div>

      <div className="flex flex-col gap-[50px] mb-[50px]">
        <ProjectFilters />
        <div className="flex flex-col gap-[20px]">
          {data &&
            data.filter(
              (project) =>
                project.published ||
                userRes?.data?.user?.email == project.pmEmail
            ).length <= 0 && (
              <div className="w-full flex justify-center mb-[100px]">
                <Label className="text-3xl">No Projects Avaiable...</Label>
              </div>
            )}

          {data &&
            data
              .filter(
                (project) =>
                  project.published ||
                  (userRes && userRes?.data?.user?.email == project.pmEmail)
              )
              .map((project, key) => (
                <ProjectCard
                  project={project}
                  key={key}
                  previewMap={previewMap}
                />
              ))}

          {userRes && !hasProject && <AddProject />}
        </div>
      </div>
    </Container>
  );
}

import React, { Suspense } from "react";
import Container from "../../components/Container";
import leadership_image from "../../assets/Leadership_image.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EXAMPLE from "../../../assets/Users/example.png";
import rabab_azeem from "../../assets/Headshots/Rabab_Azeem.png";
import olivia_xu from "../../assets/Headshots/Olivia_Xu.png";
import link from "../../public/external_link.png";
import "@/styles/page.scss";
import { sofia_sans } from "../../font";
import plasma from "../../../assets/plasma.png";
import { createClient, downloadAllTeamImages } from "@/utils/supabase/server";
import { Card } from "@/components/ui/card";
import PLUS from "@/../assets/icons/add-image.png";
import PhotoGallary from "@/components/photoGallery";
import { downloadAllImages } from "@/utils/supabase/server";
import Markdown from "@/components/ProjectDescription/ProjectDescription";
import MarkdownUpload from "@/components/Markdown/markdownUpload";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Textarea } from "@/components/ui/textarea";
import ProjectDescription from "@/components/ProjectDescription/ProjectDescription";
import EditProject from "@/components/Edit/editProject";
import Tags from "@/components/Tags/tags";
import SocialLinks from "@/components/socials/socialLinks";
import ProjectHeader from "@/components/ProjectHeader/projectHeader";
import TeamPhotos from "@/components/TeamPhotos/TeamPhotos";

async function page({ params }: any) {
  const supabase = createClient();
  const projectQuery = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.id)
    .single();

  const projectMembersQuery = await supabase
    .from("teams")
    .select("*")
    .eq("projectId", params.id);

  let projectMembers = projectMembersQuery.data as any;
  const project = projectQuery.data;
  if (!project || Object.entries(project).length == 0) throw "No project data";

  const memberImagePaths = projectMembers?.map(
    (member: any) => member.memberImage
  );
  const projectMemberImages = await downloadAllTeamImages(memberImagePaths);
  const projectImages = await downloadAllImages(project.projectImages);

  // Finding corresponding team member name associated with their profile image
  projectMembers = projectMembers?.map((member: any) => {
    const memberImageUrl = projectMemberImages?.find((imageObject) => {
      return imageObject?.publicUrl.includes(member.memberImage);
    });

    return {
      ...member,
      memberImageUrl: memberImageUrl?.publicUrl || "",
    };
  });

  let canEdit = false;
  const userRes = await supabase.auth.getUser();
  if (userRes && userRes?.data?.user?.email) {
    canEdit = userRes.data.user.email === project.pmEmail;
  }
  return (
    <Container>
      <div className="users-container">
        {/*Project title*/}
        <ProjectHeader project={project} />

        {/*Tags*/}
        <Tags project={project} />

        {/*Images of the project*/}
        <PhotoGallary project={project} images={projectImages} />

        {/* Content of the project */}
        <div className="mt-[50px] mb-[20px] w-full">
          <h1 className="text-4xl text-center md:text-left">Project Details</h1>
        </div>
        <Suspense>
          <div className="flex flex-col lg:flex-row justify-between gap-[60px] lg:gap-[70px] w-full">
            {/* Project Markdown */}
            <div className="flex flex-col gap-[24px] w-full">
              <ProjectDescription project={project} />
            </div>

            {/* Project Socials */}

            <div className="order-1 lg:order-2 max-w-[100%]  mx-auto md:mx-0 lg:min-w-[350px]">
              <div className="w-[100%] flex gap-[30px] lg:gap-[0] flex-col md:flex-row lg:flex-col">
                {/* Images */}
                <TeamPhotos project={project} members={projectMembers} />

                {/*Link to github and other socials */}
                <SocialLinks project={project} />
              </div>
            </div>

            {/* Edit Project */}
            {canEdit && <EditProject project={project} />}
          </div>
        </Suspense>
      </div>
    </Container>
  );
}

export default page;

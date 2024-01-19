import ContentContainer from "@/components/ContentContainer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Projects({ props }: any) {
  const supabase = createServerComponentClient({ cookies });

  const { data: projects } = await supabase.from("Projects").select("*");
  const { data: user, error: userError } = await supabase.auth.getUser();
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  // async function logOut() {
  //     await supabase.auth.signOut();
  // }

  return (
    <ContentContainer>
      <div className="flex flex-col justify-center items-center gap-[30px] px-[20px]">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="h1-styles">Projects</h1>
        </div>
        <pre>{JSON.stringify(projects, null, 2)}</pre>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </ContentContainer>
  );
}



  

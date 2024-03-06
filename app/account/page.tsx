import Container from "@/components/Container";

import { createClient } from "../utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Account() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/Projects')
  }

  return (
    <Container>
      <div className="flex flex-col justify-start items-center gap-[30px] pb-[100px]">
        <p>Hello {data.user.email}</p>
      </div>
    </Container>
  );
}

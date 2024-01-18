"use client";

import { useRouter } from "next/navigation";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../database.types";

export default function SignOut() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  async function handleClick() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <button
      className=" text-center bg-[#F7F7F7] rounded-[5px] tertiary-colour pt-[14px] pb-[12px] px-[15px] font-bold tracking-[1.6px] leading-none text-[16px] font-gothic"
      onClick={handleClick}
    >
      Sign Out
    </button>
  );
}

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function logout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  console.log("WE IN SINGOUT");
  if (error) {
    redirect("/");
  }
  console.log("after error");

  revalidatePath("/", "layout");
  redirect("/");
}

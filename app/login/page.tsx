import { createClient } from "@/utils/supabase/server";
import LoginForm from "./loginForm";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();
  const userRes = await supabase.auth.getUser();
  console.log(userRes);
  if (userRes?.user) redirect("/");
  return <LoginForm />;
}

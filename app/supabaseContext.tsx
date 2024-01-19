"use client";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../database.types";
import {
  createContext,
  useContext,
  useState,
} from "react";
// type SupabaseContext = {
//   supabase: SupabaseClient;
// };

const Context = createContext<any>({
  user: "",
  email: "",
  password: "",
});

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    router.refresh();
  };

  return (
    <Context.Provider
      value={{ supabase, email, setEmail, handleSignIn, password, setPassword }}
    >
      {children}
    </Context.Provider>
  );
}

export const useSupabaseContext = () => useContext(Context);

"use client";
import Button from "@/components/Buttons/Button";
import TextInput from "@/components/Inputs/TextInput";
import { Tabs } from "@/components/ui/tabs";
import { useSupabaseContext } from "@/supabaseContext";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React, { useContext } from "react";

function Login() {
  const { handleSignIn, email, setEmail, setPassword, password } =useSupabaseContext();
  console.log(email);
  return (
    <>
      <Tabs>
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signUp">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form
            className="flex flex-col justify-around items-start w-full max-w-[1000px] m-auto"
            onSubmit={handleSignIn}
          >
            <label>Email</label>
            <TextInput
              id="email"
              required={true}
              value={email || ""}
              onChange={(event: any) => {
                // setEmail(event.target.value);
              }}
            />

            <label>Password</label>
            <TextInput
              id="password"
              password={true}
              required={true}
              value={password || ""}
              onChange={(event: any) => {
                setPassword(event.target.value);
              }}
            />

            <div className="pt-[20px] flex flex-row w-full justify-between items-center">
              <Button
                label="Sign In"
                style="bg-[#F7F7F7]"
                type="button"
                onClick={handleSignIn}
              ></Button>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="signUp"> Sign Up</TabsContent>
      </Tabs>
    </>
  );
}

export default Login;

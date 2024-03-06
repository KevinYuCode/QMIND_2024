"use client";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PROFILE from "@/../assets/icons/profile.svg";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";

import { login } from './actions';

export default function Modal({ children }: any) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          {children}
        </button>
      </DialogTrigger>

      <DialogContent className="">
        <Tabs defaultValue="account" className="w-[400px] mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <form>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="12ty6@queensu.ca" required={true} value={email || ''} onChange={(event:any) => {setEmail(event.target.value)}}/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required={true} value={password || ''} onChange={(event:any) => {setPassword(event.target.value)}}/>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center items-center">
                <DialogClose asChild>
                  <Button className="w-[100%]" formAction={login}>Login</Button>
                </DialogClose>
              </CardFooter>
            </form>
          </TabsContent>
          <TabsContent value="password">
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input id="username" placeholder="12ty6@queensu.ca" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="current_password">Password</Label>
                <Input id="current_password" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="retype_password">Retype Password</Label>
                <Input id="retype_password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-[100%]">Save password</Button>
            </CardFooter>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

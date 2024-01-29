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
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function Modal({ children }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>{children}</button>
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
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input id="username" placeholder="12ty6@queensu.ca" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <Button className="w-[100%]">Login</Button>
            </CardFooter>
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

import { Label } from "@/components/ui/label";
import { login } from "./actions";
import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LoginPage() {
  return (
    <Container className="flex justify-center items-center md:py-[90px]">
      <Card className="border-transparent md:border-white border-none p-0 m-0">
        <CardHeader className="">
          <div className="flex gap-[20px] items-center">
            <Image
              src={"/icons/qmind_logo.png"}
              height={34}
              width={20}
              alt="logo"
            />

            <CardTitle className="text-4xl">Welcome Back.</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col max-w-[500px] w-[80vw] items-center gap-[15px]">
            <div className="w-full">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="w-[100%] min-h-[58px] text-lg"
              />
            </div>
            <div className="w-[100%]">
              <label htmlFor="password">Password:</label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="w-[100%] min-h-[58px] text-lg"
              />
            </div>
            <Button
              formAction={login}
              className="mt-[15px] w-[100%] text-lg py-[25px]"
            >
              Log in
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

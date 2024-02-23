import { Label } from "@/components/ui/label";
import { login, signup } from "./actions";
import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage({ searchParams }: any) {
  const { error, email } = searchParams;
  return (
    <Container className="flex justify-center items-center md:py-[90px]">
      <Card className="p-[30px] border-transparent md:border-white">
        <CardHeader>
          <CardTitle className="text-4xl">Welcome Back.</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col max-w-[700px] w-[80vw] items-center gap-[15px]">
            <div className="w-full">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                defaultValue={email}
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
                placeholder="Password"
                required
                className="w-[100%] min-h-[58px] text-lg"
              />
            </div>
            <div className="w-[100%]">
              <label htmlFor="confirm_password">Confirm Password:</label>
              <Input
                id="confirm_password"
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
                required
                className="w-[100%] min-h-[58px] text-lg"
              />
            </div>
            {error === "password" && <p>Passwords Don't Match</p>}
            <Button
              formAction={signup}
              className="mt-[15px] w-[100%] text-lg py-[25px]"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

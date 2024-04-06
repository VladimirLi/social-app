import { Button } from "@/app/ui/common/Button";
import { Input } from "@/app/ui/common/Input";
import { PasswordInput } from "../common/PasswordInput";

interface LoginProps {
  changeToSignUp: () => void;
}

export function Login(props: LoginProps) {
  return (
    <>
      <h1 className="font-bold text-center">Login</h1>
      <form className="mt-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <Input type="email" placeholder="Email" id="email" name="email" />
        <label htmlFor="password" className="block mt-2">
          Password
        </label>
        <PasswordInput placeholder="Password" id="password" name="password" />
        <Button className="mt-4">Login</Button>
      </form>
      <p className="mt-4">
        Don&apos;t have an account?{" "}
        <a href="#" className="text-blue-500" onClick={props.changeToSignUp}>
          Sign up
        </a>
      </p>
    </>
  );
}

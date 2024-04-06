import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

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
        <Input type="email" placeholder="Email" id="email" />
        <label htmlFor="password" className="block mt-2">
          Password
        </label>
        <Input type="password" placeholder="Password" id="password" />
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

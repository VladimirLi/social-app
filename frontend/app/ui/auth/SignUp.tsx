import { createUser } from "@/app/lib/actions";
import { Button } from "@/app/ui/common/Button";
import { Input } from "@/app/ui/common/Input";
import { PasswordInput } from "../common/PasswordInput";

interface SignUpProps {
  changeToLogin: () => void;
}

export function SignUp(props: SignUpProps) {
  return (
    <>
      <h1 className="font-bold text-center">Sign Up</h1>
      <form className="mt-2" action={createUser}>
        <label htmlFor="email" className="block">
          Email
        </label>
        <Input type="email" placeholder="Email" id="email" name="email" />
        <label htmlFor="password" className="block mt-2">
          Password
        </label>
        <PasswordInput placeholder="Password" id="password" name="password" />
        <Button className="mt-4">Sign Up</Button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <a href="#" className="text-blue-500" onClick={props.changeToLogin}>
          Login
        </a>
      </p>
    </>
  );
}

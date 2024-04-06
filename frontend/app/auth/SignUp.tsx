import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface SignUpProps {
  changeToLogin: () => void;
}

export function SignUp(props: SignUpProps) {
  return (
    <>
      <h1 className="font-bold text-center">Sign Up</h1>
      <form className="mt-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <Input type="email" placeholder="Email" id="email" />
        <label htmlFor="password" className="block mt-2">
          Password
        </label>
        <Input type="password" placeholder="Password" id="password" />
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

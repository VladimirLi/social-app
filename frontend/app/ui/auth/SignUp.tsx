import axios from "@/app/axios";
import { Button } from "@/app/ui/common/Button";
import { Input } from "@/app/ui/common/Input";
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { PasswordInput } from "../common/PasswordInput";

interface SignUpProps {
  changeToLogin: () => void;
}

export function SignUp(props: SignUpProps) {
  const signUpMutation = useMutation(
    (data: { email: string; password: string }) =>
      axios.post("/users", data).then((res) => res.data)
  );

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    signUpMutation.mutate({ email, password });
  };

  const isMutating = signUpMutation.isLoading;

  // TODO: Handle mutation error
  const mutationError = (signUpMutation.error as AxiosError)?.response?.data;
  console.log({ mutationError });

  return (
    <>
      <h1 className="font-bold text-center">Sign Up</h1>
      <form className="mt-2" onSubmit={handleSignUp}>
        <label htmlFor="email" className="block">
          Email
        </label>
        <Input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          disabled={isMutating}
        />
        <label htmlFor="password" className="block mt-2">
          Password
        </label>
        <PasswordInput
          placeholder="Password"
          id="password"
          name="password"
          disabled={isMutating}
        />
        <Button className="mt-4" disabled={isMutating}>
          Sign Up
        </Button>
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

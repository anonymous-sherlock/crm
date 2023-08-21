"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import { Button } from "./button";

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */
interface SignInButtonProps {}



const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google");
    } catch (error) {
      
    }
  };

  return (
    <Button onClick={signInWithGoogle} >
      Sign in
    </Button>
  );
};

export default SignInButton;

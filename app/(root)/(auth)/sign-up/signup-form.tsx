"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUp } from "@/lib/actions/user.actions";

const SignUpForm = () => {
  const [data, action] = useActionState(signUp, {
    message: "",
    success: false,
  });

  return (
    <form action={action}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            type="name"
            defaultValue={signUpDefaultValues.name}
            autoComplete="name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            defaultValue={signUpDefaultValues.email}
            autoComplete="email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            defaultValue={signUpDefaultValues.password}
            autoComplete="current-password"
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            required
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div>
          <SignUpButton />

          {data && !data.success && (
            <div className="text-center text-destructive">{data.message}</div>
          )}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link target="_self" className="link" href="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

const SignUpButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full" variant="default">
      {pending ? "Sign up..." : "Sign Up"}
    </Button>
  );
};

export default SignUpForm;

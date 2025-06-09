"use server";

import { signIn, signOut } from "@/auth";
import { signInFormSchema } from "../validator";

// Sign in the user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData,
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const callbackUrl = formData.get("callbackUrl")?.toString() || "/";

    await signIn("credentials", {
      ...user,
      redirect: true,
      callbackUrl,
    });

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }

    return { success: false, message: "Invalid email or password" };
  }
}

// Sign the user out
export async function signOutUser() {
  await signOut();
}

//

// await signIn("credentials", {
//       user.email,
//       user.password,
//       redirectTo: formData.get("callbackUrl"),
//     });

import { GoogleSignin } from "@/components/google-signin";
import { SignOut } from "@/components/sign-out";
import { getUser } from "@v1/supabase/queries";
import Image from "next/image";

export default async function Page() {
  const { data } = await getUser();

  const session = data?.user;

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center size-96">
        <Image src="/logo.png" alt="logo" width={350} height={350} />
      </div>

      {session ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <p>Welcome, {session.email}</p>
          <SignOut />
        </div>
      ) : (
        <GoogleSignin />
      )}
    </div>
  );
}

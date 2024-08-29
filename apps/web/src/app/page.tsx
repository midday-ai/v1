import { GoogleSignin } from "@/components/google-signin";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Image src="/logo.png" alt="logo" width={350} height={350} />

      <GoogleSignin />
    </div>
  );
}

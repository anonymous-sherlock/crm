import SignInButton from "@/components/ui/SignInButton";
import SignOutButton from "@/components/ui/SignOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session, "from autth login");
  return (
    <main className="h-full text-primary  flex justify-center items-center">
      <h1 className="text-6xl font-bold uppercase">
        {" "}
        Home <br/>
        {session ? (
          <>
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </h1>
    </main>
  );
}

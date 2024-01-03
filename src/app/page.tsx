import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className="flex flex-col h-screen items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] bg from-emerald-400 to-lime-800"
    >
      <div className="space-y-6 flex flex-col justify-center items-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md flex gap-3 items-center",
            font.className
          )}
        >
          <Lock className="w-12 h-12" /> Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

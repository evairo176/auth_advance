import React from "react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Lock } from "lucide-react";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={cn("text-3xl font-semibold flex gap-3", font.className)}>
        <Lock className="w-8 h-8" /> Auth
      </h1>
      <p>{label}</p>
    </div>
  );
};

export default Header;

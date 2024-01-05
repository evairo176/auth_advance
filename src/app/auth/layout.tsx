import React from "react";
import { Toaster } from "@/components/ui/sonner";

interface AuthLayoutPageProps {
  children: React.ReactNode;
}
const AuthLayoutPage = ({ children }: AuthLayoutPageProps) => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-center 
  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] bg from-emerald-400 to-lime-800"
    >
      {children}
      <Toaster />
    </div>
  );
};

export default AuthLayoutPage;

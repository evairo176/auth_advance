"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

interface SocialProps {}

const Social = ({}: SocialProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT || callbackUrl,
    });
  };

  return (
    <div className="flex items-center gap-x-2 w-full">
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-full"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-full"
        onClick={() => onClick("github")}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Social;

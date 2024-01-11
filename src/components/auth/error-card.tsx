import React from "react";
import CardWrapper from "@/components/auth/card-wrapper";
import { FaExclamationTriangle } from "react-icons/fa";

type ErrorCardProps = {};

const ErrorCard = (props: ErrorCardProps) => {
  return (
    <CardWrapper
      headerLabel="Opps! somethhing went wrong!"
      backButtonHref="/auth.login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <FaExclamationTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;

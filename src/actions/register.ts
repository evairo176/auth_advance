"use server";
import { z } from "zod";
import { registerSchema } from "@/lib/form-schema";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      type: "error",
      message: "Invalid fields!",
    };
  }

  return {
    type: "success",
    message: "Email sent!",
  };
};

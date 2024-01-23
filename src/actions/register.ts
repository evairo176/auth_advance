"use server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { registerSchema } from "@/lib/form-schema";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      type: "error",
      message: "Invalid fields!",
    };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      type: "error",
      message: "Email already in use!",
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = generateVerificationToken(email);

  return {
    type: "success",
    message: "Confirmation email sent!",
  };
};

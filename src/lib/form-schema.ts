import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Minimum 6 characters required",
    }),
});

export const registerSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Minimum 6 characters required",
    }),
  name: z.string({
    required_error: "Name is required",
  }),
});

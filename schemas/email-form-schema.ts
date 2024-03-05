import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Invalid Email'
    })
    .min(1, { message: "The 'name' field is mandatory." }),
  email: z
    .string()
    .email({ message: "The 'email' field must be a valid email address." }),
  message: z.string().min(50, {
    message: 'must be at least 50 characters'
  })
});

import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;

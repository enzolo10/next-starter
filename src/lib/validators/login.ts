import { z } from 'zod';

export const loginValidator = z.object({
  username: z.string().min(2),
  password: z.string().min(2),
});

export type LoginPayload = z.infer<typeof loginValidator>;

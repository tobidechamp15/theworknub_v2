import * as z from "zod";
import { ZodSchema } from "zod";

export const profileShema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  username: z.string().min(2),
});

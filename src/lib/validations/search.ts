import * as z from "zod";

export const searchSchema = z.object({
  q: z.string(),
});

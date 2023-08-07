import * as z from "zod";

export const threadSchema = z.object({
  thread: z.string().nonempty().min(3, { message: "Minimum 3 characters" }),
  accountId: z.string().min(1),
});

export const commentSchema = z.object({
  thread: z.string().nonempty().min(3, { message: "Minimum 3 characters" }),
});

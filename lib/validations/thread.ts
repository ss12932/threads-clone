import * as z from "zod";

export const threadSchema = z.object({
  thread: z.string().nonempty().min(1, { message: "Minimum 1 character" }),
  accountId: z.string().min(1),
});

export const commentSchema = z.object({
  thread: z.string().nonempty().min(1, { message: "Minimum 1 character" }),
});

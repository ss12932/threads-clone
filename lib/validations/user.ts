import * as z from "zod";

export const userSchema = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(1).max(30),
  username: z.string().min(1).max(30),
  bio: z.string().min(1).max(1000),
});

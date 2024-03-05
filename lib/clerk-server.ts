import { ClerkClient } from "@clerk/backend";

export const clerk = new ClerkClient(process.env.CLERK_SECRET_KEY);

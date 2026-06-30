import { createClient } from "@insforge/sdk";

const insforgeUrl = process.env.NEXT_PUBLIC_INFORGE_URL;
const insforgeAnonKey = process.env.NEXT_PUBLIC_INFORGE_ANON_KEY;

export const insforge = createClient({
  baseUrl: insforgeUrl || "http://localhost:7130",
  ...(insforgeAnonKey && { anonKey: insforgeAnonKey }),
});

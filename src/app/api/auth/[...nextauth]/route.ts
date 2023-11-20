export { GET, POST } from "@/auth";

export const runtime =
  process.env.NODE_ENV === "production" ? "edge" : "nodejs"; // optional

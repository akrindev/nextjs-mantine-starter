import { auth } from "@/auth";
import { NextResponse } from "next/server";

// import { NextResponse, type NextRequest } from "next/server";
// import { createClient } from "@/lib/supabase/middleware";

// export async function middleware(request: NextRequest) {
//   try {
//     // This `try/catch` block is only here for the interactive tutorial.
//     // Feel free to remove once you have Supabase connected.
//     const { supabase, response } = createClient(request);

//     // Refresh session if expired - required for Server Components
//     // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
//     await supabase.auth.getSession();

//     return response;
//   } catch (e) {
//     // If you are here, a Supabase client could not be created!
//     // This is likely because you have not set up environment variables.
//     // Check out http://localhost:3000 for Next Steps.
//     return NextResponse.next({
//       request: {
//         headers: request.headers,
//       },
//     });
//   }
// }

export default auth((req) => {
  const isAuth = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return null;
  }
});

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

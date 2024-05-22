import { auth } from "@/auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

export default auth(
  (req: any): undefined | Response | Promise<void | Response> => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
      return undefined;
    }

    if (isAuthRoute) {
      if (isLoggedIn)
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      return undefined;
    }

    if (!isLoggedIn && !isPublicRoute) {
      return Response.redirect(new URL("/auth/login", nextUrl));
    }
    return undefined;
  }
);

export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};

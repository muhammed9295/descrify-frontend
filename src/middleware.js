import { NextResponse } from "next/server";

export function middleware(request) {
    // const accessToken = request.cookies.get("accessToken")?.value;
    const accessToken = localStorage.getItem("accessToken");
  
    const loggedUserRestrictedPaths =
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register";
  
    if (loggedUserRestrictedPaths) {
      if (accessToken) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    } else {
      if (!accessToken) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }

  export const config = {
    matcher: [
      "/dashboard",
      "/login",
      "/register",
      "/dashboard/:id",
    ],
  };
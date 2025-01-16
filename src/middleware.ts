import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



// mentioning all my public routes here 
// so after auth success state the clerk will check taht is it private or public
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/'])


// checking for home route
// const isHomeRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, request) => {
    // validates that the route is private or public by checking that the url we are tyong to come to is in publicroute array or not if it is we can sccess if not it will move us to sign-in
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
  // DEBBARED THE LANDING->DASH FUNCTIONALITY
  // BUT PRIVATE NAD PUBLIC STILL EXISTS
//   // if user auth is success so it will check that userid is true from auth() and if after auth success are we still trying to access home rouute like above is for checking the private/public route by matching the route
//   // from publicroute aaray
//   // in this it will check that auth is good then we also going to landing page if yes then redirect us to dash 
//   // and after logging out from dash we will again come to landing 
//   // so a seamless experience to user landing->auth-> dash
//   // dash->auth not->landing 
//   // auth not-> dashboard->sign in
//   // auth -> sign-in->dashboard
//   const { userId } =  await auth();
//   // if user is logged and still is accessing home page then redirects to /dashboard
//   if (userId && isHomeRoute(request)) {
//     return NextResponse.rewrite(new URL("/", request.url));
// }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
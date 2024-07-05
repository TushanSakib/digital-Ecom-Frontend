import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes:['/','/project-detail/(.*)']
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
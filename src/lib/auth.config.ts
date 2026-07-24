import type { NextAuthConfig } from 'next-auth';

/**
 * Edge-compatible auth configuration.
 * This config is used by middleware (which runs on the Edge Runtime).
 * Heavy dependencies like bcryptjs must NOT be imported here.
 */

/** Routes that don't require authentication */
const publicRoutes = ['/', '/login', '/register'];

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

      if (isPublicRoute) {
        // If logged in and trying to access auth pages, redirect to dashboard
        if (isLoggedIn && (nextUrl.pathname === '/login' || nextUrl.pathname === '/register')) {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
      }

      // Protected routes require auth
      if (isLoggedIn) return true;
      return false; // Redirect unauthenticated to login
    },
  },
  providers: [], // Configured in auth.ts (not edge-compatible)
};

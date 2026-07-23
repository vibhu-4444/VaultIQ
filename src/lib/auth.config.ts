import type { NextAuthConfig } from 'next-auth';

/**
 * Edge-compatible auth configuration.
 * This config is used by middleware (which runs on the Edge Runtime).
 * Heavy dependencies like bcryptjs must NOT be imported here.
 */
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = !nextUrl.pathname.startsWith('/login') &&
                            !nextUrl.pathname.startsWith('/register');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated to login
      }

      // If logged in and trying to access auth pages, redirect to dashboard
      if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }

      return true;
    },
  },
  providers: [], // Configured in auth.ts (not edge-compatible)
};

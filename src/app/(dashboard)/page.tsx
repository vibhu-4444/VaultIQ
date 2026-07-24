import { redirect } from 'next/navigation';

/**
 * Route group root redirect.
 * 
 * Note: This file exists only because we can't delete it.
 * The (landing) route group handles the actual / page.
 * If Next.js resolves this file for /, it redirects to /dashboard.
 */
export default function RootDashboardRedirect() {
  redirect('/dashboard');
}

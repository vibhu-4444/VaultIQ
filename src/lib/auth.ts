/**
 * VaultIQ — Static Auth Module (GitHub Pages Compatible)
 * Decoupled from server-only dependencies for 100% static HTML export.
 */

export const handlers = {
  GET: async () => new Response('OK'),
  POST: async () => new Response('OK'),
};

export async function auth() {
  return null;
}

export async function signIn() {
  return { success: true };
}

export async function signOut() {
  return { success: true };
}

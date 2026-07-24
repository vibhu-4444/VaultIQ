import type { ActionResult } from '@/lib/errors';

/**
 * Register a new user (Client/Static Mode).
 */
export async function signUp(formData: FormData): Promise<ActionResult> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return {
      success: false,
      error: 'Please fill in all required fields',
    };
  }

  return { success: true, data: undefined };
}

/**
 * Authenticate an existing user (Client/Static Mode).
 */
export async function authenticate(formData: FormData): Promise<ActionResult> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return {
      success: false,
      error: 'Please enter your email and password',
    };
  }

  return { success: true, data: undefined };
}

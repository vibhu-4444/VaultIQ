import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { signIn } from '@/lib/auth';
import { registerSchema, loginSchema } from '@/features/auth/schemas/auth.schema';
import { DEFAULT_CATEGORIES } from '@/lib/constants';
import type { ActionResult } from '@/lib/errors';

const SALT_ROUNDS = 12;

/**
 * Register a new user.
 * Creates the user, default categories, and a default checking account.
 */
export async function signUp(formData: FormData): Promise<ActionResult> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  const parsed = registerSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0]?.toString() ?? '_root';
      if (!fieldErrors[field]) fieldErrors[field] = [];
      fieldErrors[field].push(issue.message);
    }
    return { success: false, error: 'Validation failed', fieldErrors };
  }

  const { name, email, password } = parsed.data;

  // Check for existing user
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      success: false,
      error: 'An account with this email already exists',
      fieldErrors: { email: ['An account with this email already exists'] },
    };
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  // Create user with default categories and a checking account
  await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
      categories: {
        create: DEFAULT_CATEGORIES.map((cat) => ({
          name: cat.name,
          icon: cat.icon,
          color: cat.color,
          type: cat.type,
          isDefault: true,
          sortOrder: cat.sortOrder,
        })),
      },
      accounts: {
        create: {
          name: 'Checking',
          type: 'CHECKING',
          balance: 0,
          currency: 'USD',
          color: '#3B82F6',
          icon: 'wallet',
        },
      },
    },
  });

  // Auto sign-in after registration
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
  } catch {
    // Sign-in after registration is best-effort
  }

  return { success: true, data: undefined };
}

/**
 * Authenticate an existing user.
 */
export async function authenticate(formData: FormData): Promise<ActionResult> {
  const raw = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const parsed = loginSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0]?.toString() ?? '_root';
      if (!fieldErrors[field]) fieldErrors[field] = [];
      fieldErrors[field].push(issue.message);
    }
    return { success: false, error: 'Validation failed', fieldErrors };
  }

  try {
    await signIn('credentials', {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false,
    });
    return { success: true, data: undefined };
  } catch {
    return {
      success: false,
      error: 'Invalid email or password',
    };
  }
}

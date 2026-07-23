'use client';

import { useState, useTransition, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icon } from '@/components/icons';
import { signUp } from '@/features/auth/actions/auth.actions';
import styles from './auth-form.module.css';

function getPasswordStrength(password: string): number {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  return score;
}

export function RegisterForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  function handleSubmit(formData: FormData) {
    setError(null);
    setFieldErrors({});

    startTransition(async () => {
      const result = await signUp(formData);

      if (!result.success) {
        setError(result.error);
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        }
        return;
      }

      router.push('/');
      router.refresh();
    });
  }

  return (
    <form action={handleSubmit} className={styles.form}>
      <div className={styles.header}>
        <h1 className={styles.title}>Create your account</h1>
        <p className={styles.subtitle}>
          Start your journey to smarter financial management with VaultIQ.
        </p>
      </div>

      {error && !Object.keys(fieldErrors).length && (
        <div className={styles.error} role="alert">
          <Icon name="alert-circle" size={16} />
          {error}
        </div>
      )}

      <Input
        name="name"
        type="text"
        label="Full Name"
        placeholder="John Doe"
        autoComplete="name"
        required
        error={fieldErrors.name?.[0]}
        prefix={<Icon name="user" size={18} />}
      />

      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        autoComplete="email"
        required
        error={fieldErrors.email?.[0]}
        prefix={<Icon name="mail" size={18} />}
      />

      <Input
        name="password"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        placeholder="Create a strong password"
        autoComplete="new-password"
        required
        error={fieldErrors.password?.[0]}
        prefix={<Icon name="lock" size={18} />}
        suffix={<Icon name={showPassword ? 'eye-off' : 'eye'} size={18} />}
        onSuffixClick={() => setShowPassword((v) => !v)}
        onChange={(e) => setPassword(e.target.value)}
      />

      {password.length > 0 && (
        <div className={styles.passwordStrength} aria-label="Password strength">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`${styles.strengthBar} ${
                level <= strength
                  ? strength <= 2
                    ? styles.strengthWeak
                    : strength <= 3
                    ? styles.strengthMedium
                    : styles.strengthStrong
                  : ''
              }`}
            />
          ))}
        </div>
      )}

      <Input
        name="confirmPassword"
        type={showPassword ? 'text' : 'password'}
        label="Confirm Password"
        placeholder="Repeat your password"
        autoComplete="new-password"
        required
        error={fieldErrors.confirmPassword?.[0]}
        prefix={<Icon name="lock" size={18} />}
      />

      <Button type="submit" loading={isPending} fullWidth size="lg">
        Create Account
      </Button>

      <p className={styles.footer}>
        Already have an account?{' '}
        <Link href="/login" className={styles.link}>
          Sign in
        </Link>
      </p>
    </form>
  );
}

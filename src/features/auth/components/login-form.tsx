'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icon } from '@/components/icons';
import { authenticate } from '@/features/auth/actions/auth.actions';
import styles from './auth-form.module.css';

export function LoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  function handleSubmit(formData: FormData) {
    setError(null);
    setFieldErrors({});

    startTransition(async () => {
      const result = await authenticate(formData);

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
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>
          Sign in to your VaultIQ account to continue managing your finances.
        </p>
      </div>

      {error && !Object.keys(fieldErrors).length && (
        <div className={styles.error} role="alert">
          <Icon name="alert-circle" size={16} />
          {error}
        </div>
      )}

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
        placeholder="Enter your password"
        autoComplete="current-password"
        required
        error={fieldErrors.password?.[0]}
        prefix={<Icon name="lock" size={18} />}
        suffix={<Icon name={showPassword ? 'eye-off' : 'eye'} size={18} />}
        onSuffixClick={() => setShowPassword((v) => !v)}
      />

      <Button type="submit" loading={isPending} fullWidth size="lg">
        Sign In
      </Button>

      <p className={styles.footer}>
        Don&apos;t have an account?{' '}
        <Link href="/register" className={styles.link}>
          Create one
        </Link>
      </p>
    </form>
  );
}

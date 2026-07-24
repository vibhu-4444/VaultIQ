'use client';

import Link from 'next/link';
import { Icon } from '@/components/icons';
import styles from '../auth-layout.module.css';

export default function LoginPage() {
  return (
    <>
      <h1 className={styles.formTitle}>Welcome back</h1>
      <p className={styles.formSubtitle}>
        Sign in to your VaultIQ account to continue.
      </p>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.fieldGroup}>
          <label htmlFor="login-email" className={styles.label}>Email</label>
          <div className={styles.inputWrapper}>
            <Icon name="mail" size={18} className={styles.inputIcon} />
            <input
              id="login-email"
              className={styles.input}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="login-password" className={styles.label}>Password</label>
          <div className={styles.inputWrapper}>
            <Icon name="lock" size={18} className={styles.inputIcon} />
            <input
              id="login-password"
              className={styles.input}
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Sign In
        </button>
      </form>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerText}>or</span>
        <div className={styles.dividerLine} />
      </div>

      <p className={styles.switchLink}>
        Don&apos;t have an account?{' '}
        <Link href="/register" className={styles.switchLinkAction}>
          Create one
        </Link>
      </p>
    </>
  );
}

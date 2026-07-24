'use client';

import Link from 'next/link';
import { Icon } from '@/components/icons';
import styles from '../auth-layout.module.css';

export default function RegisterPage() {
  return (
    <>
      <h1 className={styles.formTitle}>Create your account</h1>
      <p className={styles.formSubtitle}>
        Start managing your finances with AI-powered intelligence.
      </p>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.fieldGroup}>
          <label htmlFor="register-name" className={styles.label}>Full Name</label>
          <div className={styles.inputWrapper}>
            <Icon name="person" size={18} className={styles.inputIcon} />
            <input
              id="register-name"
              className={styles.input}
              type="text"
              placeholder="Alex Johnson"
              autoComplete="name"
            />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="register-email" className={styles.label}>Email</label>
          <div className={styles.inputWrapper}>
            <Icon name="mail" size={18} className={styles.inputIcon} />
            <input
              id="register-email"
              className={styles.input}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="register-password" className={styles.label}>Password</label>
          <div className={styles.inputWrapper}>
            <Icon name="lock" size={18} className={styles.inputIcon} />
            <input
              id="register-password"
              className={styles.input}
              type="password"
              placeholder="Create a strong password"
              autoComplete="new-password"
            />
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Create Account
        </button>
      </form>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerText}>or</span>
        <div className={styles.dividerLine} />
      </div>

      <p className={styles.switchLink}>
        Already have an account?{' '}
        <Link href="/login" className={styles.switchLinkAction}>
          Sign in
        </Link>
      </p>
    </>
  );
}

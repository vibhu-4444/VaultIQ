import styles from './auth-layout.module.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      {/* Brand Panel */}
      <div className={styles.brandPanel}>
        <div className={styles.brandGlow} />
        <div className={styles.brandGlow2} />
        <div className={styles.brandContent}>
          <div className={styles.brandLogo}>
            <div className={styles.brandLogoIcon}>V</div>
            <div className={styles.brandLogoText}>VaultIQ</div>
          </div>
          <h2 className={styles.brandTagline}>
            Your Entire Financial Life, Orchestrated.
          </h2>
          <p className={styles.brandDescription}>
            AI-powered insights, real-time tracking, and bank-grade security — all in one premium platform.
          </p>
        </div>
      </div>

      {/* Form Panel */}
      <div className={styles.formPanel}>
        <div className={styles.formContainer}>
          {children}
        </div>
      </div>
    </div>
  );
}

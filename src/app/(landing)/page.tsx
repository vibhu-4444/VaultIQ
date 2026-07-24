import Link from 'next/link';
import { Icon } from '@/components/icons';
import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <>
      {/* Navbar */}
      <nav className={styles.landingNav}>
        <div className={styles.navInner}>
          <div className={styles.navBrand}>
            <div className={styles.navLogo}>V</div>
            <span className={styles.navName}>VaultIQ</span>
          </div>
          <div className={styles.navLinks}>
            <a className={styles.navLink} href="#features">Features</a>
            <a className={styles.navLink} href="#security">Security</a>
            <a className={styles.navLink} href="#pricing">Pricing</a>
          </div>
          <div className={styles.navActions}>
            <Link href="/login" className={styles.loginBtn}>Log In</Link>
            <Link href="/register" className={styles.getStartedBtn}>Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Your Entire Financial Life, <br />
            <span className={styles.heroAccent}>Orchestrated.</span>
          </h1>
          <p className={styles.heroDescription}>
            The premium finance operating system for wealth management professionals and high-net-worth individuals. Experience clarity, control, and precision.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/register" className={styles.ctaPrimary}>
              Get Started Now
              <Icon name="arrow_forward" size={16} />
            </Link>
            <button className={styles.ctaSecondary}>
              Book a Demo
            </button>
          </div>

          {/* Dashboard Mockup */}
          <div className={styles.mockup}>
            <div className={styles.mockupBar}>
              <div className={styles.mockupDot} />
              <div className={styles.mockupDot} />
              <div className={styles.mockupDot} />
            </div>
            <div className={styles.mockupContent}>
              <span className={styles.mockupPlaceholder}>
                VaultIQ Dashboard Preview
              </span>
              <div className={styles.mockupFade} />
            </div>
          </div>
        </div>
        <div className={styles.heroGrid} />
      </header>

      {/* Social Proof */}
      <section className={styles.socialProof}>
        <div className={styles.socialProofInner}>
          <p className={styles.socialProofLabel}>Trusted by leading financial institutions</p>
          <div className={styles.logoRow}>
            <div className={styles.logoItem}>Vanguard</div>
            <div className={styles.logoItem}>Fidelity</div>
            <div className={styles.logoItem}>BlackRock</div>
            <div className={styles.logoItem}>Goldman Sachs</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className={styles.features}>
        <div className={styles.featuresInner}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Engineered for Precision</h2>
            <p className={styles.featuresDescription}>
              Everything you need to manage complex wealth portfolios with complete confidence and clarity.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {/* AI Insights */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Icon name="smart_toy" size={24} filled />
              </div>
              <h3 className={styles.featureTitle}>AI-Powered Insights</h3>
              <p className={styles.featureText}>
                Our proprietary finance copilot analyzes market trends and your portfolio in real-time to surface actionable, personalized intelligence.
              </p>
            </div>

            {/* Security */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Icon name="lock" size={24} filled />
              </div>
              <h3 className={styles.featureTitle}>Bank-Grade Security</h3>
              <p className={styles.featureText}>
                Your data is secured with AES-256 encryption, multi-factor authentication, and continuous SOC 2 compliant auditing protocols.
              </p>
            </div>

            {/* Analytics */}
            <div className={`${styles.featureCard} ${styles.featureCardAccent}`}>
              <div className={styles.featureIcon}>
                <Icon name="query_stats" size={24} filled />
              </div>
              <h3 className={styles.featureTitle}>Real-time Analytics</h3>
              <p className={styles.featureText}>
                Experience zero latency across all asset classes with streaming data pipelines that keep you ahead of market movements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>V</div>
            <span className={styles.footerName}>VaultIQ</span>
          </div>
          <p className={styles.footerCopy}>© 2024 VaultIQ. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a className={styles.footerLink} href="#">Privacy</a>
            <a className={styles.footerLink} href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}

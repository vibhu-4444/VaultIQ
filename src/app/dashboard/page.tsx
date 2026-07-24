import { Icon } from '@/components/icons';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  return (
    <>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Overview</h2>
        <p className={styles.pageSubtitle}>Welcome back. Here is your financial summary.</p>
      </div>

      {/* KPI Metric Cards */}
      <div className={styles.metricsGrid}>
        {/* Net Worth */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Net Worth</span>
            <Icon name="account_balance" size={20} className={styles.metricIcon} />
          </div>
          <div className={styles.metricValue}>$248,500</div>
          <div className={`${styles.metricTrend} ${styles.trendUp}`}>
            <Icon name="trending_up" size={16} />
            <span>+2.4% this month</span>
          </div>
        </div>

        {/* Cash Flow */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Cash Flow</span>
            <Icon name="swap_vert" size={20} className={styles.metricIcon} />
          </div>
          <div className={styles.metricValue}>$12,400</div>
          <div className={`${styles.metricTrend} ${styles.trendNeutral}`}>
            <Icon name="sync" size={16} />
            <span>Steady</span>
          </div>
        </div>

        {/* Monthly Burn */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Monthly Burn</span>
            <span style={{ color: 'var(--tertiary-container)' }}>
              <Icon name="local_fire_department" size={20} />
            </span>
          </div>
          <div className={styles.metricValue}>$4,200</div>
          <div className={`${styles.metricTrend} ${styles.trendDown}`}>
            <span>-12% vs last month</span>
          </div>
        </div>

        {/* Health Score */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Health Score</span>
            <Icon name="monitor_heart" size={20} className={styles.metricIcon} />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <div className={styles.metricValue}>92</div>
            <span className={styles.metricValueSmall}>/100</span>
          </div>
          <div className={styles.healthBar}>
            <div className={styles.healthFill} style={{ width: '92%' }} />
          </div>
        </div>
      </div>

      {/* Main Grid: Chart + AI Insights */}
      <div className={styles.mainGrid}>
        {/* Left: Chart + Recent Activity */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {/* Net Worth Growth Chart */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Net Worth Growth</h3>
              <select className={styles.cardSelect}>
                <option>Last 12 Months</option>
                <option>YTD</option>
                <option>All Time</option>
              </select>
            </div>
            <div className={styles.chartArea}>
              <div className={styles.chartGradient}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{ stroke: 'var(--primary)', fill: 'none', strokeWidth: '1.5px' }}
                >
                  <path d="M0,90 Q10,85 20,70 T40,60 T60,40 T80,30 T100,10" />
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(37,99,235,0.1), transparent)',
                    clipPath: 'polygon(0% 90%, 20% 70%, 40% 60%, 60% 40%, 80% 30%, 100% 10%, 100% 100%, 0% 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              <span className={styles.chartLabel}>Interactive Chart Component</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className={`${styles.card} ${styles.activitySection}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Recent Activity</h3>
              <button className={styles.viewAllLink}>View All</button>
            </div>
            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <div className={styles.activityLeft}>
                  <div className={styles.activityIcon}>
                    <Icon name="shopping_cart" size={20} />
                  </div>
                  <div>
                    <div className={styles.activityName}>Whole Foods Market</div>
                    <div className={styles.activityMeta}>Groceries • Today, 10:42 AM</div>
                  </div>
                </div>
                <div className={styles.activityAmount}>-$142.50</div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.activityLeft}>
                  <div className={styles.activityIcon}>
                    <Icon name="arrow_downward" size={20} />
                  </div>
                  <div>
                    <div className={styles.activityName}>Acme Corp Salary</div>
                    <div className={styles.activityMeta}>Income • Yesterday</div>
                  </div>
                </div>
                <div className={`${styles.activityAmount} ${styles.activityAmountPositive}`}>
                  +$4,250.00
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.activityLeft}>
                  <div className={styles.activityIcon}>
                    <Icon name="subscriptions" size={20} />
                  </div>
                  <div>
                    <div className={styles.activityName}>Netflix</div>
                    <div className={styles.activityMeta}>Entertainment • Oct 24</div>
                  </div>
                </div>
                <div className={styles.activityAmount}>-$15.99</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: AI Insights */}
        <div className={`${styles.card} ${styles.insightsCard}`}>
          <div className={styles.insightsGlow} />
          <div className={styles.insightsHeader}>
            <Icon name="auto_awesome" size={24} className={styles.insightsHeaderIcon} />
            <h3 className={styles.insightsTitle}>AI Insights</h3>
          </div>

          <div className={styles.insightsList}>
            {/* Insight 1 */}
            <div className={`${styles.insightItem} ${styles.insightPrimary}`}>
              <div className={styles.insightContent}>
                <Icon name="lightbulb" size={18} className={styles.insightIcon} style={{ color: 'var(--primary)' }} />
                <p className={styles.insightText}>
                  You could save <strong>$400/yr</strong> by switching your internet provider.
                </p>
              </div>
              <div className={styles.insightActions}>
                <button className={styles.insightLink}>Review Options</button>
              </div>
            </div>

            {/* Insight 2 */}
            <div className={`${styles.insightItem} ${styles.insightDefault}`}>
              <div className={styles.insightContent}>
                <Icon name="event" size={18} className={styles.insightIcon} style={{ color: 'var(--on-surface-variant)' }} />
                <p className={styles.insightText}>
                  Upcoming bill: <strong>Amex Gold</strong> ($250) due in 3 days.
                </p>
              </div>
              <div className={styles.insightActions}>
                <button className={styles.insightPrimaryBtn}>Pay Now</button>
                <button className={styles.insightSecondaryBtn}>Remind me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

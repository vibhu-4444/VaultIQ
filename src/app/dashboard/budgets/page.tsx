import { Icon } from '@/components/icons';
import styles from './budgets.module.css';

export default function BudgetsPage() {
  const circumference = 2 * Math.PI * 26;
  const offset = circumference - (0.37 * circumference);

  return (
    <>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <h2>Budgets</h2>
          <p>Plan and track your spending goals.</p>
        </div>
        <button className={styles.createBtn}>
          <Icon name="add" size={20} />
          Create New Budget
        </button>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryLabel}>
            <Icon name="account_balance_wallet" size={16} />
            Total Monthly Budget
          </div>
          <div className={styles.summaryValue}>
            $6,500<span className={styles.summaryValueSmall}>.00</span>
          </div>
          <div className={`${styles.summarySubtext} ${styles.summarySubtextPositive}`}>
            +$500 from last month
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryLabel}>Spent So Far</div>
          <div className={styles.summaryValue}>
            $4,120<span className={styles.summaryValueSmall}>.50</span>
          </div>
          <div className={styles.summarySubtext}>63% of total budget used</div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryLabel}>
            <Icon name="savings" size={16} />
            Remaining Balance
          </div>
          <div className={styles.remainingRow}>
            <div>
              <div className={styles.summaryValue}>
                $2,379<span className={styles.summaryValueSmall}>.50</span>
              </div>
              <div className={styles.summarySubtext}>12 days left in cycle</div>
            </div>
            <div className={styles.circleProgress}>
              <svg className={styles.circleSvg} width="64" height="64" viewBox="0 0 64 64">
                <circle className={styles.circleTrack} cx="32" cy="32" r="26" />
                <circle
                  className={styles.circleFill}
                  cx="32" cy="32" r="26"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />
              </svg>
              <div className={styles.circleText}>37%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout: Categories + Smart Budgeting */}
      <div className={styles.mainGrid}>
        {/* Category Breakdown */}
        <div>
          <h3 className={styles.sectionTitle}>Category Breakdown</h3>
          <div className={styles.categoryList}>
            {/* Housing */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryLeft}>
                  <div className={styles.categoryIcon}>
                    <Icon name="home" size={20} />
                  </div>
                  <div>
                    <div className={styles.categoryName}>Housing</div>
                    <div className={styles.categoryMeta}>Rent, Utilities, Maintenance</div>
                  </div>
                </div>
                <div className={styles.categoryRight}>
                  <div className={styles.categoryAmount}>$2,400 / $2,500</div>
                  <div className={`${styles.categoryRemaining} ${styles.remainingGreen}`}>$100 remaining</div>
                </div>
              </div>
              <div className={styles.progressBar}>
                <div className={`${styles.progressFill} ${styles.progressBlue}`} style={{ width: '96%' }} />
              </div>
            </div>

            {/* Food & Dining */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryLeft}>
                  <div className={styles.categoryIcon}>
                    <Icon name="restaurant" size={20} />
                  </div>
                  <div>
                    <div className={styles.categoryName}>Food & Dining</div>
                    <div className={styles.categoryMeta}>Groceries, Restaurants, Coffee</div>
                  </div>
                </div>
                <div className={styles.categoryRight}>
                  <div className={styles.categoryAmount}>$850 / $800</div>
                  <div className={`${styles.categoryRemaining} ${styles.remainingRed}`}>$50 over limit</div>
                </div>
              </div>
              <div className={styles.progressBar}>
                <div className={`${styles.progressFill} ${styles.progressRed}`} style={{ width: '100%' }} />
              </div>
            </div>

            {/* Transport */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryLeft}>
                  <div className={styles.categoryIcon}>
                    <Icon name="directions_car" size={20} />
                  </div>
                  <div>
                    <div className={styles.categoryName}>Transport</div>
                    <div className={styles.categoryMeta}>Gas, Transit, Ride-shares</div>
                  </div>
                </div>
                <div className={styles.categoryRight}>
                  <div className={styles.categoryAmount}>$180 / $400</div>
                  <div className={`${styles.categoryRemaining} ${styles.remainingGreen}`}>$220 remaining</div>
                </div>
              </div>
              <div className={styles.progressBar}>
                <div className={`${styles.progressFill} ${styles.progressBlue}`} style={{ width: '45%' }} />
              </div>
            </div>

            {/* Entertainment */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryLeft}>
                  <div className={styles.categoryIcon}>
                    <Icon name="theaters" size={20} />
                  </div>
                  <div>
                    <div className={styles.categoryName}>Entertainment</div>
                    <div className={styles.categoryMeta}>Movies, Games, Events</div>
                  </div>
                </div>
                <div className={styles.categoryRight}>
                  <div className={styles.categoryAmount}>$690 / $800</div>
                  <div className={`${styles.categoryRemaining} ${styles.remainingGreen}`}>$110 remaining</div>
                </div>
              </div>
              <div className={styles.progressBar}>
                <div className={`${styles.progressFill} ${styles.progressRed}`} style={{ width: '86%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Smart Budgeting Panel */}
        <div className={styles.smartPanel}>
          <div className={styles.smartHeader}>
            <Icon name="smart_toy" size={20} />
            <h3 className={styles.smartTitle}>Smart Budgeting</h3>
          </div>

          {/* Optimization Opportunity */}
          <div className={`${styles.smartCard} ${styles.borderOptimize}`}>
            <div className={styles.smartCardGlow} style={{ backgroundColor: 'var(--primary)' }} />
            <div className={`${styles.smartLabel} ${styles.labelOptimize}`}>Optimization Opportunity</div>
            <p className={styles.smartText}>
              You could save <strong>$50.00</strong> on Subscriptions this month by canceling unused services identified in your recent transactions.
            </p>
            <button className={styles.smartLink}>
              Review Subscriptions <Icon name="arrow_forward" size={14} />
            </button>
          </div>

          {/* Action Required */}
          <div className={`${styles.smartCard} ${styles.borderAction}`}>
            <div className={styles.smartCardGlow} style={{ backgroundColor: 'var(--error)' }} />
            <div className={`${styles.smartLabel} ${styles.labelAction}`}>Action Required</div>
            <p className={styles.smartText}>
              Your <strong>Food & Dining</strong> budget has exceeded its limit. Consider adjusting funds from another category to balance your monthly goal.
            </p>
            <button className={`${styles.smartLink} ${styles.smartLinkRed}`}>
              Reallocate Funds <Icon name="arrow_forward" size={14} />
            </button>
          </div>

          {/* On Track */}
          <div className={`${styles.smartCard} ${styles.borderOnTrack}`}>
            <div className={`${styles.smartLabel} ${styles.labelOnTrack}`}>On Track</div>
            <p className={styles.smartText}>
              You are currently projected to end the month with <strong>$1,200</strong> in surplus across all budgets.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

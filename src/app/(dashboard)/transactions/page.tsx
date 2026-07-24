import { Icon } from '@/components/icons';
import styles from './transactions.module.css';

export default function TransactionsPage() {
  return (
    <>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <h2>Transactions</h2>
          <p>Manage and review your financial flow.</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.btnOutline}>
            <Icon name="download" size={20} />
            Export
          </button>
          <button className={styles.btnPrimary}>
            <Icon name="add" size={20} />
            Add New
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <div className={`${styles.filterItem} ${styles.filterItemWide}`}>
          <Icon name="calendar_today" size={18} className={styles.filterIcon} />
          <select className={styles.filterSelect}>
            <option>Last 30 Days</option>
            <option>This Month</option>
            <option>Last Quarter</option>
            <option>Custom Range</option>
          </select>
        </div>
        <div className={styles.filterItem}>
          <Icon name="category" size={18} className={styles.filterIcon} />
          <select className={styles.filterSelect}>
            <option>All Categories</option>
            <option>Software</option>
            <option>Travel</option>
            <option>Equipment</option>
          </select>
        </div>
        <div className={styles.filterItem}>
          <Icon name="account_balance" size={18} className={styles.filterIcon} />
          <select className={styles.filterSelect}>
            <option>All Accounts</option>
            <option>Corporate Card</option>
            <option>Checking</option>
          </select>
        </div>
        <div className={styles.filterItem}>
          <Icon name="filter_list" size={18} className={styles.filterIcon} />
          <select className={styles.filterSelect}>
            <option>Status: All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>
        <button className={styles.clearFilters}>Clear Filters</button>
      </div>

      {/* Data Table */}
      <div className={styles.tableContainer}>
        {/* Table Header */}
        <div className={styles.tableHeader}>
          <div>Date</div>
          <div>Description</div>
          <div>Category</div>
          <div>Account</div>
          <div className={styles.colRight}>Amount</div>
          <div className={styles.colRight}>Status</div>
        </div>

        {/* Table Body */}
        <div className={styles.tableBody}>
          {/* Row 1 */}
          <div className={styles.tableRow}>
            <div className={styles.cellDate}>Oct 24, 2023</div>
            <div className={styles.cellDescription}>Stripe Subscription</div>
            <div className={styles.cellCategory}>
              <div className={`${styles.categoryIcon} ${styles.categoryIconDefault}`}>
                <Icon name="computer" size={16} />
              </div>
              <span className={styles.categoryName}>Software</span>
            </div>
            <div className={styles.cellAccount}>Corp Card ...4921</div>
            <div className={styles.cellAmount}>-$1,240.00</div>
            <div className={styles.cellStatus}>
              <span className={`${styles.badge} ${styles.badgeCompleted}`}>Completed</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.tableRow}>
            <div className={styles.cellDate}>Oct 22, 2023</div>
            <div className={styles.cellDescription}>Client Retainer - Acme Corp</div>
            <div className={styles.cellCategory}>
              <div className={`${styles.categoryIcon} ${styles.categoryIconIncome}`}>
                <Icon name="arrow_downward" size={16} />
              </div>
              <span className={styles.categoryName}>Income</span>
            </div>
            <div className={styles.cellAccount}>Checking ...8822</div>
            <div className={`${styles.cellAmount} ${styles.amountPositive}`}>+$15,000.00</div>
            <div className={styles.cellStatus}>
              <span className={`${styles.badge} ${styles.badgeCompleted}`}>Completed</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.tableRow}>
            <div className={styles.cellDate}>Oct 26, 2023</div>
            <div className={styles.cellDescription}>Delta Airlines - Flight LAX</div>
            <div className={styles.cellCategory}>
              <div className={`${styles.categoryIcon} ${styles.categoryIconDefault}`}>
                <Icon name="flight" size={16} />
              </div>
              <span className={styles.categoryName}>Travel</span>
            </div>
            <div className={styles.cellAccount}>Corp Card ...4921</div>
            <div className={styles.cellAmount}>-$850.50</div>
            <div className={styles.cellStatus}>
              <span className={`${styles.badge} ${styles.badgePending}`}>Pending</span>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <p className={styles.paginationInfo}>Showing 1 to 3 of 124 entries</p>
          <div className={styles.paginationButtons}>
            <button className={styles.pageBtn}>
              <Icon name="chevron_left" size={16} />
            </button>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>
              <Icon name="chevron_right" size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

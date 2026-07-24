import { Icon } from '@/components/icons';
import styles from './analytics.module.css';

export default function AnalyticsPage() {
  return (
    <>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <h2>Analytics</h2>
          <p>Deep-dive into your financial performance.</p>
        </div>
        <select className={styles.periodSelect}>
          <option>Last 6 Months</option>
          <option>Last 12 Months</option>
          <option>YTD</option>
        </select>
      </div>

      {/* Metric Cards */}
      <div className={styles.metricsGrid}>
        {/* Net Savings Rate */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Net Savings Rate</span>
            <Icon name="trending_up" size={20} className={styles.metricIcon} />
          </div>
          <div className={styles.metricValue}>42.8%</div>
          <div className={`${styles.metricTrend} ${styles.trendUp}`}>
            <Icon name="north" size={14} />
            +3.2% from last period
          </div>
        </div>

        {/* Avg Monthly Burn */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricLabel}>Avg. Monthly Burn</span>
            <Icon name="local_fire_department" size={20} className={styles.metricIcon} />
          </div>
          <div className={styles.metricValue}>$12,450</div>
          <div className={`${styles.metricTrend} ${styles.trendUp}`}>
            <Icon name="north" size={14} />
            +1.5% from last period
          </div>
        </div>

        {/* Projected Yearly */}
        <div className={styles.metricCard}>
          <div className={styles.projectedLabel}>
            <Icon name="auto_awesome" size={16} />
            Projected Yearly
          </div>
          <div className={styles.metricValue}>$148,000</div>
          <div className={styles.metricSubtext}>On track to beat goal by 8%</div>
        </div>
      </div>

      {/* Cash Flow Analysis Chart */}
      <div className={styles.chartCard}>
        <div className={styles.chartHeader}>
          <h3 className={styles.chartTitle}>Cash Flow Analysis</h3>
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.legendDotBlue}`} />
              Income
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.legendDotGray}`} />
              Expenses
            </div>
          </div>
        </div>
        <div className={styles.chartArea}>
          <svg className={styles.chartSvg} viewBox="0 0 600 280" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line className={styles.gridLine} x1="60" y1="40" x2="580" y2="40" />
            <line className={styles.gridLine} x1="60" y1="100" x2="580" y2="100" />
            <line className={styles.gridLine} x1="60" y1="160" x2="580" y2="160" />
            <line className={styles.gridLine} x1="60" y1="220" x2="580" y2="220" />

            {/* Y-axis labels */}
            <text className={styles.yAxis} x="50" y="44" textAnchor="end">$50k</text>
            <text className={styles.yAxis} x="50" y="104" textAnchor="end">$37k</text>
            <text className={styles.yAxis} x="50" y="164" textAnchor="end">$25k</text>
            <text className={styles.yAxis} x="50" y="224" textAnchor="end">$12k</text>

            {/* X-axis labels */}
            <text className={styles.xAxis} x="147" y="260" textAnchor="middle">Jan</text>
            <text className={styles.xAxis} x="234" y="260" textAnchor="middle">Feb</text>
            <text className={styles.xAxis} x="321" y="260" textAnchor="middle">Mar</text>
            <text className={styles.xAxis} x="408" y="260" textAnchor="middle">Apr</text>
            <text className={styles.xAxis} x="495" y="260" textAnchor="middle">May</text>
            <text className={styles.xAxis} x="570" y="260" textAnchor="middle">Jun</text>

            {/* Area fill for income */}
            <path
              className={styles.areaIncome}
              d="M147,180 C190,170 220,120 234,115 C260,105 290,95 321,90 C360,83 380,80 408,120 C430,150 470,80 495,55 C530,30 555,35 570,40 L570,240 L147,240 Z"
            />

            {/* Income line */}
            <path
              className={styles.lineIncome}
              d="M147,180 C190,170 220,120 234,115 C260,105 290,95 321,90 C360,83 380,80 408,120 C430,150 470,80 495,55 C530,30 555,35 570,40"
            />

            {/* Expense line (dashed) */}
            <path
              className={styles.lineExpense}
              d="M147,210 C190,200 220,195 234,190 C260,185 290,180 321,185 C360,190 380,185 408,190 C430,192 470,195 495,180 C530,165 555,160 570,170"
            />

            {/* Data points on income line */}
            <circle cx="408" cy="120" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
            <circle cx="495" cy="55" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Bottom Grid: Donut + Bars */}
      <div className={styles.bottomGrid}>
        {/* Category Distribution */}
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Category Distribution</h3>
          <div className={styles.donutContainer}>
            <svg className={styles.donutSvg} viewBox="0 0 180 180">
              {/* Housing 40% */}
              <circle
                className={styles.donutSlice}
                cx="90" cy="90" r="65"
                stroke="#2563eb"
                strokeDasharray={`${0.4 * 408.4} ${408.4}`}
                strokeDashoffset="0"
                transform="rotate(-90 90 90)"
              />
              {/* Food 25% */}
              <circle
                className={styles.donutSlice}
                cx="90" cy="90" r="65"
                stroke="#7dd3fc"
                strokeDasharray={`${0.25 * 408.4} ${408.4}`}
                strokeDashoffset={`${-0.4 * 408.4}`}
                transform="rotate(-90 90 90)"
              />
              {/* Transport 20% */}
              <circle
                className={styles.donutSlice}
                cx="90" cy="90" r="65"
                stroke="#818cf8"
                strokeDasharray={`${0.2 * 408.4} ${408.4}`}
                strokeDashoffset={`${-0.65 * 408.4}`}
                transform="rotate(-90 90 90)"
              />
              {/* Other 15% */}
              <circle
                className={styles.donutSlice}
                cx="90" cy="90" r="65"
                stroke="#d1d5db"
                strokeDasharray={`${0.15 * 408.4} ${408.4}`}
                strokeDashoffset={`${-0.85 * 408.4}`}
                transform="rotate(-90 90 90)"
              />
              {/* Center text */}
              <text className={`${styles.donutCenter} ${styles.donutNumber}`} x="90" y="86">6</text>
              <text className={`${styles.donutCenter} ${styles.donutLabel}`} x="90" y="104">CATEGORIES</text>
            </svg>

            <div className={styles.donutLegend}>
              <div className={styles.donutLegendItem}>
                <span className={styles.donutLegendDot} style={{ backgroundColor: '#2563eb' }} />
                Housing <span className={styles.donutPercent}>40%</span>
              </div>
              <div className={styles.donutLegendItem}>
                <span className={styles.donutLegendDot} style={{ backgroundColor: '#7dd3fc' }} />
                Food <span className={styles.donutPercent}>25%</span>
              </div>
              <div className={styles.donutLegendItem}>
                <span className={styles.donutLegendDot} style={{ backgroundColor: '#818cf8' }} />
                Transport <span className={styles.donutPercent}>20%</span>
              </div>
              <div className={styles.donutLegendItem}>
                <span className={styles.donutLegendDot} style={{ backgroundColor: '#d1d5db' }} />
                Other <span className={styles.donutPercent}>15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Comparison */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartTitle}>Monthly Comparison</h3>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.legendDotBlue}`} />
                This Month
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.legendDotGray}`} />
                Last Month
              </div>
            </div>
          </div>
          <div className={styles.barContainer}>
            <div className={styles.barGroup}>
              <div className={styles.barPair}>
                <div className={`${styles.bar} ${styles.barBlue}`} style={{ height: '140px' }} />
                <div className={`${styles.bar} ${styles.barGray}`} style={{ height: '110px' }} />
              </div>
              <span className={styles.barLabel}>Income</span>
            </div>
            <div className={styles.barGroup}>
              <div className={styles.barPair}>
                <div className={`${styles.bar} ${styles.barBlue}`} style={{ height: '90px' }} />
                <div className={`${styles.bar} ${styles.barGray}`} style={{ height: '80px' }} />
              </div>
              <span className={styles.barLabel}>Fixed Exp.</span>
            </div>
            <div className={styles.barGroup}>
              <div className={styles.barPair}>
                <div className={`${styles.bar} ${styles.barBlue}`} style={{ height: '60px' }} />
                <div className={`${styles.bar} ${styles.barGray}`} style={{ height: '70px' }} />
              </div>
              <span className={styles.barLabel}>Var. Exp.</span>
            </div>
            <div className={styles.barGroup}>
              <div className={styles.barPair}>
                <div className={`${styles.bar} ${styles.barBlue}`} style={{ height: '100px' }} />
                <div className={`${styles.bar} ${styles.barGray}`} style={{ height: '30px' }} />
              </div>
              <span className={styles.barLabel}>Savings</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

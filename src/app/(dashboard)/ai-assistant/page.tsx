import { Icon } from '@/components/icons';
import styles from './ai-assistant.module.css';

export default function AiAssistantPage() {
  return (
    <div className={styles.page}>
      {/* Greeting */}
      <div className={styles.greeting}>
        <h2 className={styles.greetingTitle}>Good morning, Alex.</h2>
        <p className={styles.greetingSubtitle}>
          I&apos;ve analyzed your recent financial data. Here are some key insights.
        </p>
      </div>

      {/* Insight Cards */}
      <div className={styles.insightsGrid}>
        {/* Forecast */}
        <div className={`${styles.insightCard} ${styles.insightCardBlue}`}>
          <div className={`${styles.insightLabel} ${styles.labelBlue}`}>
            <Icon name="query_stats" size={16} />
            Forecast
          </div>
          <div className={styles.insightTitle}>Spending Forecast</div>
          <p className={styles.insightDescription}>
            Based on your current trajectory, you&apos;re projected to save <strong>$2,400</strong> more this quarter than last.
          </p>
          <button className={`${styles.insightLink} ${styles.linkBlue}`}>
            View Full Report <Icon name="arrow_forward" size={14} />
          </button>
        </div>

        {/* Subscription Audit */}
        <div className={`${styles.insightCard} ${styles.insightCardRed}`}>
          <div className={`${styles.insightLabel} ${styles.labelRed}`}>
            <Icon name="warning" size={16} />
            Subscription Audit
          </div>
          <div className={styles.insightTitle}>3 Unused Subscriptions</div>
          <p className={styles.insightDescription}>
            I found <strong>3 subscriptions</strong> you haven&apos;t used in 60+ days, costing <strong>$85/mo</strong>.
          </p>
          <button className={`${styles.insightLink} ${styles.linkRed}`}>
            Review & Cancel <Icon name="arrow_forward" size={14} />
          </button>
        </div>

        {/* Tax Strategy */}
        <div className={`${styles.insightCard} ${styles.insightCardOrange}`}>
          <div className={`${styles.insightLabel} ${styles.labelOrange}`}>
            <Icon name="description" size={16} />
            Tax Strategy
          </div>
          <div className={styles.insightTitle}>Tax-Loss Harvesting</div>
          <p className={styles.insightDescription}>
            You have <strong>$1,200</strong> in unrealized losses that could be harvested to offset capital gains.
          </p>
          <button className={`${styles.insightLink} ${styles.linkOrange}`}>
            Explore Strategy <Icon name="arrow_forward" size={14} />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className={styles.chatArea}>
        {/* Sample conversation */}
        <div className={styles.userMessage}>
          What&apos;s my biggest spending category this month?
        </div>

        <div className={styles.aiMessage}>
          <div className={styles.aiAvatar}>
            <Icon name="smart_toy" size={18} />
          </div>
          <div className={styles.aiBubble}>
            Your biggest spending category this month is <strong>Housing</strong> at <strong>$2,400</strong>, which accounts for 40% of your total expenses. This is consistent with your 6-month average. Your second largest is Food & Dining at $850.
          </div>
        </div>

        <div className={styles.userMessage}>
          How can I reduce my food spending?
        </div>

        <div className={styles.aiMessage}>
          <div className={styles.aiAvatar}>
            <Icon name="smart_toy" size={18} />
          </div>
          <div className={styles.aiBubble}>
            Based on your transaction history, here are 3 actionable suggestions: <strong>1)</strong> You dine out an average of 4.2x/week — reducing to 2x could save ~$320/mo. <strong>2)</strong> Switching to bulk grocery shopping could save ~$80/mo. <strong>3)</strong> Your coffee shop visits total $145/mo — consider brewing at home.
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className={styles.inputArea}>
        <div className={styles.inputRow}>
          <button className={styles.attachButton} aria-label="Attach file">
            <Icon name="attach_file" size={20} />
          </button>
          <input
            className={styles.chatInput}
            type="text"
            placeholder="Ask me anything about your finances..."
          />
          <button className={styles.sendButton} aria-label="Send message">
            <Icon name="send" size={18} />
          </button>
        </div>
        <div className={styles.inputFooter}>
          <div className={styles.encryptionNote}>
            <Icon name="lock" size={14} />
            Enterprise-grade encryption
          </div>
          <div className={styles.shortcutNote}>Press Enter to send</div>
        </div>
      </div>
    </div>
  );
}

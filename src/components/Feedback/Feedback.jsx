import styles from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <span className={styles.good}>{good}</span>
      </p>
      <p className={styles.stat}>
        Neutral: <span className={styles.neutral}>{neutral}</span>
      </p>
      <p className={styles.stat}>
        Bad: <span className={styles.bad}>{bad}</span>
      </p>
      <p className={styles.stat}>
        Total: <span className={styles.total}>{total}</span>
      </p>
      <p className={styles.stat}>
        Positive: <span className={styles.positive}>{positive}%</span>
      </p>
    </div>
  );
}

export default Feedback;

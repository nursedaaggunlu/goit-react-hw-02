import styles from "./Options.module.css";

function Options({ onGood, onNeutral, onBad, total, onReset }) {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.button} onClick={onGood}>
        Good
      </button>
      <button className={styles.button} onClick={onNeutral}>
        Neutral
      </button>
      <button className={styles.button} onClick={onBad}>
        Bad
      </button>

      {total > 0 && (
        <button className={styles.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;

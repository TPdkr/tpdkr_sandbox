import styles from "./FlatPushButton.module.css";

export default function FlatPushButton({ onClick, children }) {
  return (
    <span onClick={onClick} className={styles.FlatPushButton}>
      <div className={styles.FlatPushButtonContents}>{children}</div>
    </span>
  );
}

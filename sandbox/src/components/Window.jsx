import styles from "./Window.module.css";

export default function Window({ children }) {
  return (
    <div className={styles.Window}>
      <div className={styles.WindowBar}></div>
      {children}
    </div>
  );
}

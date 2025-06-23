import styles from "./Window.module.css";

export default function Window(props) {
  return (
    <div className={styles.Window}>
      <div className={styles.WindowBar}></div>
      {props.content}
    </div>
  );
}

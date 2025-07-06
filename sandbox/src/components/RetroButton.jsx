import styles from "./RetroButton.module.css";

export default function RetroButton(props) {
  return (
    <>
      <button className={styles.RetroButton}>{props.content}</button>
    </>
  );
}

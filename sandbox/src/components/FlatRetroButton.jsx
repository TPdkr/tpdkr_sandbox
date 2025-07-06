import styles from "./FlatRetroButton.module.css";

export default function RetroButton(props) {
  return (
    <>
      <button className={styles.RetroButton}>{props.content}</button>
    </>
  );
}

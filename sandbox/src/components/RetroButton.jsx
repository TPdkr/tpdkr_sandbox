import styles from "./RetroButton.module.css";
import { useNavigate } from "react-router-dom";

export default function RetroButton({
  className = "",
  onClick = () => {},
  path = "",
  children,
}) {
  //In case path is specified the button is turned into a link
  let action = onClick;
  const navigate = useNavigate();
  if (path != "") {
    action = () => navigate(path);
  }

  return (
    <span className={`${styles.RetroButtonBorder} ${className}`}>
      <button className={styles.RetroButton} onClick={action}>
        {children}
      </button>
    </span>
  );
}

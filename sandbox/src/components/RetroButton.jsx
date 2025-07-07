import styles from "./RetroButton.module.css";
import { useNavigate } from "react-router-dom";

export default function RetroButton({
  onClick = () => {},
  path = "",
  children,
}) {
  let action = onClick;
  const navigate = useNavigate();
  if (path != "") {
    action = () => navigate(path);
  }

  return (
    <span className={styles.RetroButtonBorder}>
      <button className={styles.RetroButton} onClick={action}>
        {children}
      </button>
    </span>
  );
}

import styles from "./FlatRetroButton.module.css";
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
    <button className={styles.RetroButton} onClick={action}>
      {children}
    </button>
  );
}

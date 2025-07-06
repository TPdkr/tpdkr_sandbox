import styles from "./FlatPushButton.module.css";
import { useNavigate } from "react-router-dom";

export default function FlatPushButton({
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
    <span onClick={action} className={styles.FlatPushButton}>
      <div className={styles.FlatPushButtonContents}>{children}</div>
    </span>
  );
}

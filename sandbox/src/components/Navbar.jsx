import FlatPushButton from "./FlatPushButton";
import styles from "./Navbar.module.css";
import { useState } from "react";
import RetroButton from "./RetroButton";

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    <>
      <div className={styles.OpenSideBarPanel}>
        <div className={styles.OpenSideBarPanelTitle}>
          <h4>CV.web</h4>
        </div>

        <RetroButton
          className={styles.OpenSidebarButton}
          onClick={() => setIsNavVisible(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#000000"
          >
            <path d="M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z" />
          </svg>
        </RetroButton>
      </div>

      <nav
        id="navbar"
        className={[styles.Navbar, isNavVisible ? styles.show : ""].join(" ")}
      >
        <ul>
          <li>
            <button
              id="close-sidebar-button"
              aria-label="close sidebar"
              className={styles.CloseSidebarButton}
              onClick={() => setIsNavVisible(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#000000"
              >
                <path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z" />
              </svg>
            </button>
          </li>
          <li>
            <RetroButton path="/tpdkr_sandbox/com64" fullwidth={true}>
              <h4>Com64</h4>
            </RetroButton>
          </li>
          <li>
            <RetroButton path="/tpdkr_sandbox/buttons" fullwidth={true}>
              <h4>Buttons</h4>
            </RetroButton>
          </li>
          <li>
            <RetroButton path="/tpdkr_sandbox/windows" fullwidth={true}>
              <h4>Windows</h4>
            </RetroButton>
          </li>
          <li>
            <RetroButton path="/tpdkr_sandbox/" fullwidth={true}>
              <h4>Main</h4>
            </RetroButton>
          </li>
        </ul>
      </nav>

      <div
        className={styles.overlay}
        onClick={() => setIsNavVisible(false)}
        aria-hidden="true"
      ></div>
    </>
  );
}

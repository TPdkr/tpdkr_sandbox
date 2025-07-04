import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <button
        id="open-sidebar-button"
        aria-label="open sidebar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#c9c9c9"
        >
          <path d="M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z" />
        </svg>
      </button>

      <nav id="navbar" className={styles.Navbar}>
        <ul>
          <li>
            <button
              id="close-sidebar-button"
              aria-label="close sidebar"
              className={styles.CloseSidebarButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#c9c9c9"
              >
                <path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z" />
              </svg>
            </button>
          </li>
          <li class="home-li">
            <a class="active-link" aria-current="page" href="index.html">
              <h4>Home</h4>
            </a>
          </li>
          <li>
            <a href="index.html#main_title">
              <h4>About</h4>
            </a>
          </li>
          <li>
            <a href="index.html#edu_title">
              <h4>Education</h4>
            </a>
          </li>
          <li>
            <a href="projects.html">
              <h4>Projects</h4>
            </a>
          </li>
          <li className={styles.NavbarCover}></li>
        </ul>
      </nav>

      <div id="overlay" onclick="closeSidebar()" aria-hidden="true"></div>
    </div>
  );
}

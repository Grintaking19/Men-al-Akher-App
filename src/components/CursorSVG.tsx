
import styles from "./CursorSVG.module.css"
export default function CursorSVG() {
  return (
      <svg
        viewBox="8 4 8 16"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["cursor"]}
      >
        <rect x="10" y="6" width="4" height="12" fill="#fff" />
        </svg>
  );
}
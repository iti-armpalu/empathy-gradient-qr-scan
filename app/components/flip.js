"use client";

import styles from "../page.module.css";

export default function Flip({ onClick, children }) {
  return (
    <div className={styles.flipSection}>
      <button className={styles.flipButton} onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}>
        {children}
        <span className={styles.iconWrap}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#084955"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.flipIcon}
          >
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}

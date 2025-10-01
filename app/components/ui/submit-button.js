"use client";

import styles from "./submit-button.module.css";

export function SubmitButton({ loading }) {
  return (
    <button
      className={`${styles.btn} ${loading ? styles.disabled : ""}`}
      disabled={loading}
    >
      {loading ? "Sending..." : "Submit"}
    </button>
  );
}
"use client";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import Form from "./ui/form";

export default function Survey() {
  const [expanded, setExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Automatically reset submission state after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setExpanded(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className={styles.surveySection}>
      <div className={styles.surveyWrapper}>
        <button
          className={styles.surveyToggle}
          onClick={() => setExpanded(!expanded)}
        >
          {/* Register your interest to participate in a survey */}
          Join the launch list for The Empathy Gradient Book
          <div
            className={`${styles.iconSurvey} ${expanded ? styles.active : ""}`}
          >
            <div
              className={`${styles.iconShape} ${expanded ? styles.active : ""}`}
            ></div>
          </div>
        </button>

        <div
          className={`${styles.surveyFormWrap} ${expanded ? styles.expanded : styles.collapsed
            }`}
        >
          <div className={styles.surveyInner}>
            {submitted ? (
              <p className={`${styles.surveyThanks} ${styles.fadeIn}`}>
                Successfully submitted! Thank you for your interest.
              </p>
            ) : (
              expanded && <Form onSubmit={() => setSubmitted(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

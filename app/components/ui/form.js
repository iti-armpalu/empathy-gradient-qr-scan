"use client";
import { useState } from "react";
import styles from "./form.module.css";
import { SubmitButton } from "./submit-button";
import Link from "next/link";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Email is not valid";
    }
    if (!acceptedPrivacy) {
      newErrors.privacy = "You must accept the privacy policy to continue"
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // const url = new URL(process.env.NEXT_PUBLIC_LOG_SHEET_URL);
      // Read env at build-time (NEXT_PUBLIC_* is inlined by Next.js)
      const base = process.env.NEXT_PUBLIC_LOG_SHEET_URL;

      if (!base) {
        throw new Error(
          "Missing NEXT_PUBLIC_LOG_SHEET_URL (check Vercel envs for this environment and redeploy)."
        );
      }

      const url = new URL(base);

      // Prevent mixed content when your site runs on HTTPS (Vercel)
      if (typeof window !== "undefined" && window.location.protocol === "https:" && url.protocol !== "https:") {
        throw new Error(
          `Mixed content blocked: target must be https, got "${url.protocol}".`
        );
      }

      url.searchParams.set("type", "survey");
      url.searchParams.set("name", name);
      url.searchParams.set("email", email);
      url.searchParams.set("privacy", "test")

      console.log("[SURVEY] Hitting sheet URL:", url.toString()); // 🪵 View in logs


      // await fetch(url.toString(), {
      //   method: "GET",
      //   mode: "no-cors",
      // });

      // IMPORTANT: do NOT use no-cors, it hides real errors
      const res = await fetch(url.toString(), {
        method: "GET",
        cache: "no-store",
        // If your endpoint requires CORS, it must allow your Vercel origin.
        // Do not add mode: "no-cors" — it will mask failures.
      });

      if (!res.ok) {
        const errText = await res.text().catch(() => "");
        throw new Error(`Upstream responded ${res.status}. ${errText}`);
      }

      // success
      onSubmit(); // tell parent "submitted"
      setName("");
      setEmail("");
      setAcceptedPrivacy(false)
    } catch (err) {
      console.error("Survey submit failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.surveyForm} onSubmit={handleSubmit}>
      <div className={styles.fieldGroup}>
        <input
          type="text"
          placeholder="Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? styles.errorInput : ""}
        />
        {errors.name && <p className={styles.errorText}>{errors.name}</p>}
      </div>

      <div className={styles.fieldGroup}>
        <input
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? styles.errorInput : ""}
        />
        {errors.email && <p className={styles.errorText}>{errors.email}</p>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={acceptedPrivacy}
            onChange={(e) => setAcceptedPrivacy(e.target.checked)}
            className={styles.checkbox}
          />
          <span>
            By submitting this form, you agree to be contacted once the book launches. We will store your name and email
            securely, and you can unsubscribe anytime. Read our{" "}
            <Link href="/privacy-policy" className={styles.privacyLink} target="_blank">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.privacy && <p className={styles.errorText}>{errors.privacy}</p>}
      </div>

      <SubmitButton loading={loading} />
    </form>
  );
}

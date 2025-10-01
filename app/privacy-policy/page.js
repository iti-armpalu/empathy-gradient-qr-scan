import Link from "next/link"
import styles from "./privacy.module.css"

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        <h1 className={styles.title}>Privacy Policy</h1>

        <div className={styles.prose}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p className={styles.paragraph}>
              This Privacy Policy explains how we collect, use, and protect your personal information when you submit
              your details through our book launch notification form.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Information We Collect</h2>
            <p className={styles.paragraph}>When you sign up for book launch notifications, we collect:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Your name</li>
              <li className={styles.listItem}>Your email address</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
            <p className={styles.paragraph}>We use your information solely to:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Notify you when the book launches</li>
              <li className={styles.listItem}>Send you relevant updates about the book</li>
              <li className={styles.listItem}>Respond to any inquiries you may have</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Storage and Security</h2>
            <p className={styles.paragraph}>
              Your personal information is stored securely and is protected using industry-standard security measures.
              We do not share, sell, or distribute your information to third parties without your explicit consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your Rights</h2>
            <p className={styles.paragraph}>You have the right to:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Unsubscribe from our notifications at any time</li>
              <li className={styles.listItem}>Request access to your personal data</li>
              <li className={styles.listItem}>Request deletion of your personal data</li>
              <li className={styles.listItem}>Update or correct your information</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Unsubscribe</h2>
            <p className={styles.paragraph}>
              You can unsubscribe from our mailing list at any time by clicking the unsubscribe link in any email we
              send you, or by contacting us directly.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at
              iti@1pa.ai.
            </p>
          </section>

          <section>
            <p className={styles.footer}>Last updated: {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

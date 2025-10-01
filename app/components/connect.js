"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function Connect() {
  return (
    <div className={styles.connect}>
      <Link
        href="https://linkedin.com/in/royarmale"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.connectLink}
      >
        <Image
          src="/linkedin-icon.png"
          alt="LinkedIn"
          width={28}
          height={24}
          className={styles.icon}
        />
        <span>Connect with Roy on LinkedIn</span>
      </Link>
    </div>
  );
}

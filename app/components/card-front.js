"use client";

import Image from "next/image";
import Flip from "./flip";
import Connect from "./connect";
import styles from "../page.module.css";
import { logArticleClick } from "../utils/log-article-click";
import Survey from "./survey";

export default function CardFront({ setFlipped, articles }) {
  return (
    <div className={`${styles.card} ${styles.front}`}>
      <div className={styles.scrollContainer}>
        <div>
          <Image
            src="/book-cover-graph.webp"
            alt="The Empathy Gradient book cover"
            width={300}
            height={150}
            className={styles.profileImage}
            priority
          />

          <h1 className={styles.name}>The Empathy Gradient Book</h1>


          <h6 className={styles.title}>
            Don’t get left behind. Learn to lead, build, and scale with empathy-aware systems.
          </h6>
          <p className={styles.bio}>
            The Empathy Gradient introduces a model for navigating work in the age
            of AI, one that replaces binary thinking about automation with a spectrum-based
            approach rooted in human context. The Empathy Gradient helps leaders and builders
            determine which tasks require human judgment, which can be augmented, and which should
            be automated entirely. Structured across four core themes, from adaptation and
            augmentation to agentic design.
          </p>

          <Survey />

          {/* <div className={styles.articles}>
            <h2>Featured Articles</h2>
            {articles.map((article, idx) => (
              <div key={idx} className={styles.articleItem}>
                <span>{article.title}</span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => logArticleClick(article.title, "front")}
                >
                  <button className={styles.readButton}>Read</button>
                </a>
              </div>
            ))}
          </div> */}
          <Flip onClick={() => setFlipped(true)}>Explore articles and videos</Flip>
        </div>

        <div>
          <Connect />
        </div>
      </div>
    </div>
  );
}

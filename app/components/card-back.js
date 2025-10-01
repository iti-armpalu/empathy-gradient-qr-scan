"use client";

import Flip from "./flip";
import Connect from "./connect";
import styles from "../page.module.css";
import { logArticleClick } from "../utils/log-article-click";
import Survey from "./survey";

export default function CardBack({ setFlipped, articles, videos }) {
  return (
    <div className={`${styles.card} ${styles.back}`}>
      <div className={styles.scrollContainer}>
        <div>
          <Flip onClick={() => setFlipped(false)}>Back to profile</Flip>
          <div className={styles.articles}>
            <h2>Articles</h2>
            {articles.map((article, idx) => (
              <div key={idx} className={styles.articleItem}>
                <span>{article.title}</span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => logArticleClick(article.title, "back")}
                >
                  <button className={styles.readButton}>Read</button>
                </a>
              </div>
            ))}
          </div>
          {videos.length > 0 && (
            <div className={styles.articles}>
              <h2>Videos</h2>
              {videos.map((video, idx) => (
                <div key={idx} className={styles.articleItem}>
                  <span>{video.title}</span>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => logArticleClick(video.title, "back")}
                  >
                    <button className={styles.readButton}>Watch</button>
                  </a>
                </div>
              ))}
            </div>
          )}
          {/* <Survey /> */}
        </div>
        <Connect />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactInner}>
        <div>
          <h2 className={styles.title}>
            Let's connect!
          </h2>
          <ul>
            <li>
              <a
                href="mailto:jiasong214@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                jiasong214@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jiasong214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.subLinkContainer}>
          <h2 className={styles.title}>
            If you'd like to see more,
          </h2>
          <ul>
            <li>
              <a
                href="https://jiasong214.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio (2022)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jiasong214"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

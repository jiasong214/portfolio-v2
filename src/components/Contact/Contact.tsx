import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";

function Contact() {
  const contactItem = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className={styles.contact}>
      <motion.div className={styles.contactInner}>
        <div>
          <motion.h2 className={styles.title} variants={contactItem}>
            Let's connect!
          </motion.h2>
          <motion.ul>
            <motion.li variants={contactItem}>
              <a
                href="mailto:jiasong214@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                jiasong214@gmail.com
              </a>
            </motion.li>
            <motion.li variants={contactItem}>
              <a
                href="https://www.linkedin.com/in/jiasong214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </motion.li>
          </motion.ul>
        </div>

        <div>
          <motion.h2 className={styles.title} variants={contactItem}>
            If you'd like to see more,
          </motion.h2>
          <motion.ul>
            <motion.li variants={contactItem}>
              <a
                href="https://jiasong214.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio (2022)
              </a>
            </motion.li>
            <motion.li variants={contactItem}>
              <a
                href="https://github.com/jiasong214"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;

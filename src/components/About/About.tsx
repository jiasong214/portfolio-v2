import React, { JSX } from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";

const yearsOfExperience = new Date().getFullYear() - 2022;

function About(): JSX.Element {
  const introductionItem = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={styles.about}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            ease: "easeOut",
          },
        },
      }}
    >
      <motion.p className={styles.introduction} variants={introductionItem}>
        I'm a frontend-focused full stack engineer with over {yearsOfExperience} years of
        experience building web apps using React, TypeScript, and Node.js.
      </motion.p>
      <motion.p className={styles.introduction} variants={introductionItem}>
        I love crafting clean, reusable code and building user-friendly
        interfaces that feel intuitive and thoughtful.
      </motion.p>
      <motion.p className={styles.introduction} variants={introductionItem}>
        While my main focus is on the frontend, I also have hands-on experience
        across the stack — from backend and data processing to AWS deployment.
      </motion.p>
      <motion.p className={styles.introduction} variants={introductionItem}>
        I enjoy building products that matter, through clean code, thoughtful
        design, and collaboration.
      </motion.p>
    </motion.div>
  );
}

export default About;
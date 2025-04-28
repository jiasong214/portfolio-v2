import React, { useState } from "react";
import styles from "./Experience.module.scss";
import { motion } from "framer-motion";

function Experience() {
  const itemMotionVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={styles.experience}
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.05 }}
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <motion.article>
        <motion.h4 className={styles.companyTitle} variants={itemMotionVariant}>
          Style Arcade
          <motion.div
            className={styles.divider}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { width: "0%" },
              visible: { width: "100%" },
            }}
          />
        </motion.h4>
        <motion.div className={styles.positionBlock}>
          <motion.div className={styles.leftContainer}>
            <motion.h3 className={styles.position} variants={itemMotionVariant}>
              Software engineer
            </motion.h3>
            <motion.p className={styles.subInfo} variants={itemMotionVariant}>
              Jul 2023 - Present
            </motion.p>
          </motion.div>
          <motion.ul className={styles.jobSummary}>
            <motion.li variants={itemMotionVariant}>
              Act as a core frontend engineer, building and maintaining product
              features using React, Redux, and TypeScript.
            </motion.li>
            <motion.li variants={itemMotionVariant}>
              Contribute to migrating state management from MobX to Redux.
            </motion.li>
            <motion.li variants={itemMotionVariant}>
              Work across a wide range of frontend architectures — from legacy
              class components and container/presenter patterns to composable,
              modular systems.
            </motion.li>
            <motion.li variants={itemMotionVariant}>
              Troubleshoot issues by analysing backend logic and data processing
              flows.
            </motion.li>
            <motion.li variants={itemMotionVariant}>
              Gain exposure to AWS for deployment and service integration.
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div className={styles.positionBlock}>
          <motion.div className={styles.leftContainer}>
            <motion.h3 className={styles.position} variants={itemMotionVariant}>
              Junior software engineer
            </motion.h3>
            <motion.p className={styles.subInfo} variants={itemMotionVariant}>
              Apr 2022 - Jul 2023
            </motion.p>
          </motion.div>
          <motion.ul className={styles.jobSummary}>
            <motion.li variants={itemMotionVariant}>
              Diagnosed and resolved data issues by analysing tenant data and
              backend data-processing logic.
            </motion.li>
            <motion.li variants={itemMotionVariant}>
              Implemented a new design system across the app to enhance UI
              consistency and user experience.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.article>
      <motion.article>
        <motion.h4 className={styles.companyTitle} variants={itemMotionVariant}>
          Ridly Rubbish Removal
          <motion.div
            className={styles.divider}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { width: "0%" },
              visible: { width: "100%" },
            }}
          />
        </motion.h4>
        <motion.div className={styles.positionBlock}>
          <motion.div className={styles.leftContainer}>
            <motion.h3 className={styles.position} variants={itemMotionVariant}>
              Frontend developer
            </motion.h3>
            <motion.p className={styles.subInfo} variants={itemMotionVariant}>
              Dec 2022 - Jan 2023 | Contract
            </motion.p>
          </motion.div>

          <motion.ul className={styles.jobSummary}>
            <motion.li variants={itemMotionVariant}>
              Collaborated on a team of three engineers to rebuild a legacy
              CMS-based website using modern web technologies.
            </motion.li>
            <motion.li variants={itemMotionVariant}>
              Built all frontend components using React, TypeScript, and Remix.
            </motion.li>
            <motion.li variants={itemMotionVariant}>
              Precisely replicated the existing UI with SASS, maintaining full
              design and animation fidelity.
            </motion.li>
            <motion.li variants={itemMotionVariant}>
              Implemented dynamic interactions and reusable logic through custom
              React hooks.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.article>
    </motion.div>
  );
}

export default Experience;

import React, { useState } from "react";
import styles from "./Experience.module.scss";

function Experience() {

  return (
    <div
      className={styles.experience}
    >
      <article>
        <h4 className={styles.companyTitle}>
          Style Arcade
        </h4>
        <div className={styles.positionBlock}>
          <h3 className={styles.position}>
            Software engineer
          </h3>
          <p className={styles.subInfo}>
            Jul 2023 - Present
          </p>
          <ul className={styles.jobSummary}>
            <li>
              Act as a core frontend engineer, building and maintaining product
              features using React, Redux, and TypeScript.
            </li>
            <li>
              Contribute to migrating state management from MobX to Redux.
            </li>
            <li>
              Work across a wide range of frontend architectures — from legacy
              class components and container/presenter patterns to composable,
              modular systems.
            </li>
            <li>
              Gain exposure to AWS for deployment and service integration.
            </li>
        </ul>
        </div>
        <div className={styles.divider} />
        <div className={styles.positionBlock}>
          <h3 className={styles.position}>
            Junior software engineer
          </h3>
          <p className={styles.subInfo}>
            Apr 2022 - Jul 2023
          </p>
          <ul className={styles.jobSummary}>
            <li>
              Troubleshoot issues by analysing backend logic and data processing
              flows.
            </li>
            <li>
              Implemented a new design system across the app to enhance UI
              consistency and user experience.
            </li>
          </ul>
        </div>
      </article>
      <article>
        <h4 className={styles.companyTitle}>
          Ridly Rubbish Removal
        </h4>
        <div className={styles.positionBlock}>
            <h3 className={styles.position}>
              Frontend developer
            </h3>
            <p className={styles.subInfo}>
              Dec 2022 - Jan 2023 | Contract
            </p>

          <ul className={styles.jobSummary}>
            <li>
              Collaborated on a team of three engineers to rebuild a legacy
              CMS-based website using modern web technologies.
            </li>
            <li>
              Built all frontend components using React, TypeScript, and Remix.
            </li>
            <li>
              Precisely replicated the existing UI with SASS, maintaining full
              design and animation fidelity.
            </li>
            <li>
              Implemented dynamic interactions and reusable logic through custom
              React hooks.
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Experience;

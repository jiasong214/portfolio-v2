import React, { useState } from "react";
import styles from "./skills.module.scss";

function Skills() {
  return (
    <ul className={styles.skills}>
      <li>React</li>
      <li>Redux</li>
      <li>Typescript</li>
      <li>SASS</li>
      <li>Tailwind</li>
      <li>Node JS</li>
      <li>AWS</li>
      <li>GIT</li>
    </ul>
  );
}

export default Skills;

import React, { useState } from "react";
import styles from "./skills.module.scss";
import { motion } from "framer-motion";

function Skills() {
  const skillItemMotionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      className={styles.skills}
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.08 }}
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <motion.li variants={skillItemMotionVariant}>React</motion.li>
      <motion.li variants={skillItemMotionVariant}>Redux</motion.li>
      <motion.li variants={skillItemMotionVariant}>Typescript</motion.li>
      <motion.li variants={skillItemMotionVariant}>SASS</motion.li>
      <motion.li variants={skillItemMotionVariant}>Tailwind</motion.li>
      <motion.li variants={skillItemMotionVariant}>Node JS</motion.li>
      <motion.li variants={skillItemMotionVariant}>AWS</motion.li>
      <motion.li variants={skillItemMotionVariant}>GIT</motion.li>
    </motion.ul>
  );
}

export default Skills;

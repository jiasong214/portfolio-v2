import React, { JSX } from "react";
import styles from "./Intro.module.scss";
import { motion } from "framer-motion";
import Profile from "../../assets/imgs/cool-kid.png";

interface IntroProps {
  loading: boolean;
}

function Intro({ loading }: IntroProps): JSX.Element {
  return (
    <motion.div className={styles.intro}>
      <div className={styles.textContainer}>
        <motion.p
          className={styles.hello}
          initial={{ opacity: 1, y: "150%" }}
          animate={{ opacity: 1, y: loading ? "150%" : 0 }}
          transition={{ duration: 0.3 }}
        >
          Hello there,
        </motion.p>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm Jia Song
        </motion.h1>
      </div>
      <div className={styles.imgContainer}>
        <motion.img
          className={styles.img}
          src={Profile}
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? "10%" : 0 }}
          transition={{ duration: 0.2, delay: 1.8 }}
        />
        <p>L It's me! :)</p>
      </div>
    </motion.div>
  );
}

export default Intro;

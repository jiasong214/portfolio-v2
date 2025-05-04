import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";

interface HeaderProps {
  loading: boolean;
  theme: "light" | "dark" | undefined;
  onUpdateTheme: (theme: "light" | "dark") => void;
}
function Header({ loading, theme, onUpdateTheme }: HeaderProps) {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: loading ? 0 : 1 }}
      transition={{ duration: 0.3, delay: 2 }}
    >
      <div className={styles.location}>
        Based in
        <br />
        Sydney, Australia
      </div>

      <div className={styles.nightModeToggle}>
        <p>Dark</p>
        <div
          className={`${styles.toggle} ${theme === "dark" ? styles.on : ""}`}
          onClick={() => onUpdateTheme(theme === "light" ? "dark" : "light")}
        >
          <div className={styles.circle} />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;

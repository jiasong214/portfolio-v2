import React, { useState } from 'react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        &copy; JIA SONG 2025
      </div>
    </footer>
  )
}

export default Footer

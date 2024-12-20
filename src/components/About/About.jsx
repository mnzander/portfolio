import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils"

export default function About() {
  return (
    <section className={styles.aboutContainer} id="about">
        <h2 className={styles.title}>ABOUT</h2>
        <div className={styles.content}>
          <img 
            className={styles.aboutImg} 
            src={getImageUrl("about/aboutImage.webp")} 
            alt="Airport image" 
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.webp")} alt="cursor icon"/>
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I&apos;m a frontend developer with experience in building responsive and optimized sites.</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.webp")} alt="server icon"/>
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I have experience developing fast and optimized back-end systems and APIs.</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/managerIcon.webp")} alt="manager icon"/>
              <div className={styles.aboutItemText}>
                <h3>System Administrator</h3>
                <p>I have 2 years of experience in system maintenance, issue resolution and user support.</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
  )
}

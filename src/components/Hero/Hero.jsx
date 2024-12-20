import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Ander</h1>
        <p className={styles.description}>
            I&apos;m a Junior Full-stack Developer with experience using HTML, CSS, Javascript, React and NodeJS. <br/> Reach out if you'd like to learn more!
        </p>
        <a href="mailto:andermunozr@gmail.com" className={styles.contactBtn}>Contact me</a>
      </div>
      <img 
        className={styles.heroImg} 
        src={getImageUrl("hero/heroImage.webp")} 
        alt="Hero image of me" 
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

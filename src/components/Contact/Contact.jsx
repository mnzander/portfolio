import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils"

export default function Contact() {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.webp")} alt="Email Icon" />
                <a href='mailto:andermunozr@gmail.com'>andermunozr@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.webp")} alt="Linkedin Icon" />
                <a href='https://www.linkedin.com/in/andermnz'>linkedin.com/andermnz</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.webp")} alt="GitHub Icon" />
                <a href='https://www.github.com/mnzander'>github.com/mnzander</a>
            </li>
        </ul>
    </footer>
  )
}

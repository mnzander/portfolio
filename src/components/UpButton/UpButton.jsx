import React from 'react';
import styles from "./UpButton.module.css";
import { getImageUrl } from "../../utils";

export default function UpButton() {
  return (
    <div className={styles.container}>
      <a href='#top'>
        <img className={styles.arrow} src={getImageUrl("upbutton/arrow.png")} alt="Upward button" />
      </a>
    </div>
  )
}

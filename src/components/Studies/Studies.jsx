import React from 'react'
import styles from "./Studies.module.css"
import studies from "../../data/studies.json"
import languages from "../../data/languages.json"
import { getImageUrl } from '../../utils'

export default function Studies() {
  return (
    <section className={styles.educationContainer} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.studies}>
            {
                studies.map((study, id) => {
                    return (
                        <li key={id} className={styles.studyItem}>
                            <img
                                className={styles.studyImage}
                                src={getImageUrl(study.imageSrc)}
                                alt={`${study.academy} logo`}
                            />
                            <div className={styles.studyItemDetails}>
                                <h3><a href={study.web}>{study.title}</a></h3>
                                <p>{`${study.academy} (${study.startDate} - ${study.endDate})`}</p>
                                <ul>
                                    {study.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        <ul className={styles.languages}>
            {
                languages.map((language, id) => {
                    return (
                        <li key={id} className={styles.languageItem}>
                            <img
                                src={getImageUrl(language.flag)}
                                className={styles.languageImage}
                                alt={`${language.language} flag`}
                            />
                            <div className={styles.languageItemDetails}>
                                <h3>{language.language}</h3>
                                <p>{`Level: ${language.level}`}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </section>
  )
}

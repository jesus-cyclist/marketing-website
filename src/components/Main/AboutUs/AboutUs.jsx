import React from 'react'
import styles from './AboutUs.module.scss'
import Video from '@assets/image/video-about-us.png'
import { ReactComponent as PlayButton } from '@assets/svg/play_btn.svg'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.aboutUs}>
      <button className={styles.aboutUs__button}>{t('aboutUs.button')}</button>
      <div className={styles.aboutUs__text}>
        <span className={styles.text__aboutUs}>{t('aboutUs.intro')}</span>
        <div className={styles.text__title}>
          <h2>{t('aboutUs.title')}</h2>
          <h2>{t('aboutUs.subtitle')}</h2>
        </div>

        <span className={styles.text__description}>{t('aboutUs.info')}</span>
      </div>
      <div className={styles.aboutUs__video}>
        <img src={Video} alt={'video-about-us'} />
        <div className={styles.aboutUs__videoButton}>
          <PlayButton />
        </div>
      </div>
    </section>
  )
}

export default AboutUs

import React from 'react'
import styles from './Subscribe.module.scss'
import Ground_1 from '@assets/image/grass_bck-1.png'
import Ground_3 from '@assets/image/grass_bck-3.png'
import Ground_4 from '@assets/image/grass_bck-4.png'
import Ground_5 from '@assets/image/grass_bck-5.png'
import Ground_6 from '@assets/image/grass_bck.png'
import Meeting from '@assets/image/Pitch meeting-rafiki 1.png'
import Input from '../../UI/Input/Input'
import { useTranslation } from 'react-i18next'

const Subscribe = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span className={styles.header__intro}>{t('subscribe.intro')}</span>
          <span className={styles.header__title}>{t('subscribe.title')}</span>
          <span className={styles.header__text}>{t('subscribe.info')}</span>
        </div>

        <Input />
        <div className={styles.meeting}>
          <div className={styles.meeting__image}>
            <img src={Meeting} alt='Meeting' />
          </div>
        </div>
      </div>

      <div className={styles.meeting__background}>
        <img src={Ground_5} alt='Ground' srcSet={`${Ground_1} 768w`} />
        <img
          src={Ground_1}
          alt='Ground'
          srcSet={`${Ground_1} 768w, ${Ground_4} 1200w`}
        />
        <img src={Ground_3} alt='Ground' srcSet={`${Ground_6} 768w`} />
      </div>
    </div>
  )
}

export default Subscribe

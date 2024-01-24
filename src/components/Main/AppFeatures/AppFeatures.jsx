import React from 'react'
import classNames from 'classnames'
import styles from './AppFeatures.module.scss'
import Winners from '@assets/image/Winners-pana 1.png'
import Check from '@assets/image/akar-icons_circle-check-fill.png'
import { useTranslation } from 'react-i18next'

const AppFeatures = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.features}>
      <div className={styles.features__desciption}>
        <span className={styles.desciption__introText}>
          {t('appFeatures.intro')}
        </span>
        <div className={styles.desciption__title}>
          <h2 className={styles.title}>{t('appFeatures.title')}</h2>
          <h2 className={styles.subtitle}>{t('appFeatures.subtitle')}</h2>
        </div>
        <span className={styles.desciption__text}>
          {t('appFeatures.titleText')}
        </span>
      </div>
      <div className={styles.features__appFeatures}>
        <div className={styles.features__logo}>
          <img src={Winners} alt={'winners'} />
        </div>
        <div className={classNames(styles.features__feature, styles.first_ftr)}>
          <div className={styles.feature__number}>
            <span>01</span>
            <div className={styles.feature__check}>
              <img src={Check} alt='' />
            </div>
          </div>
          <div className={styles.feature__title}>{t('appFeatures.design')}</div>
          <div className={styles.feature__text}>{t('appFeatures.info')}</div>
        </div>
        <div className={classNames(styles.features__feature, styles.scnd_ftr)}>
          <div className={styles.feature__number}>
            <span>02</span>
            <div className={styles.feature__check}>
              <img src={Check} alt={'check'} />
            </div>
          </div>
          <div className={styles.feature__title}>
            {t('appFeatures.develop')}
          </div>
          <div className={styles.feature__text}>{t('appFeatures.info')}</div>
        </div>
        <div className={classNames(styles.features__feature, styles.third_ftr)}>
          <div className={styles.feature__number}>
            <span>03</span>
            <div className={styles.feature__check}>
              <img src={Check} alt={'check'} />
            </div>
          </div>
          <div className={styles.feature__title}>
            {t('appFeatures.product')}
          </div>
          <div className={styles.feature__text}>{t('appFeatures.info')}</div>
        </div>
      </div>
    </div>
  )
}

export default AppFeatures

import React from 'react'
import styles from './AppScreens.module.scss'
import NotFound from '@assets/image/undraw_Not_found_re_44w9 1.png'
import DesignData from '@assets/image/undraw_Design_data_re_0s26.png'
import FastDownloads from '@assets/image/undraw_Download_re_li50.png'
import LargeStorage from '@assets/image/undraw_Memory_storage_reh0.png'
import Arc from '@assets/image/fig.png'
import Quad from '@assets/image/fig_2.png'
import { useTranslation } from 'react-i18next'

const AppScreens = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.appScreen}>
        <div className={styles.appScreen__header}>
          <span className={styles.header__intro}>{t('appScreens.intro')}</span>
          <h2 className={styles.header__title}>{t('appScreens.title')}</h2>
          <h2 className={styles.header__subtitle}>
            {t('appScreens.subtitle')}
          </h2>
        </div>
        <div className={styles.main}>
          <div className={styles.appAdvantages}>
            <div className={styles.appAdvantages__img}>
              <img src={NotFound} alt='NotFound' />
            </div>
            <div className={styles.appAdvantages__info}>
              <span className={styles.appAdvantages__title}>
                {t('appScreens.notFound')}
              </span>
              <span className={styles.appAdvantages__text}>
                {t('appScreens.info')}
              </span>
            </div>
          </div>
          <div className={styles.appAdvantages}>
            <div className={styles.appAdvantages__img}>
              <img src={DesignData} alt='DesignData' />
            </div>
            <div className={styles.appAdvantages__info}>
              <span className={styles.appAdvantages__title}>
                {t('appScreens.designData')}
              </span>
              <span className={styles.appAdvantages__text}>
                {t('appScreens.info')}
              </span>
            </div>
          </div>
          <div className={styles.appAdvantages}>
            <div className={styles.appAdvantages__img}>
              <img src={FastDownloads} alt='FastDownloads' />
            </div>
            <div className={styles.appAdvantages__info}>
              <span className={styles.appAdvantages__title}>
                {t('appScreens.fastDownloads')}
              </span>
              <span className={styles.appAdvantages__text}>
                {t('appScreens.info')}
              </span>
            </div>
          </div>
          <div className={styles.appAdvantages}>
            <div className={styles.appAdvantages__img}>
              <img src={LargeStorage} alt='LargeStorage' />
            </div>
            <div className={styles.appAdvantages__info}>
              <span className={styles.appAdvantages__title}>
                {t('appScreens.largeStorage')}
              </span>
              <span className={styles.appAdvantages__text}>
                {t('appScreens.info')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.background}>
          <div className={styles.background__right}>
            <img src={Quad} alt='Quad' />
          </div>
          <div className={styles.background__left}>
            <img src={Arc} alt='Arc' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppScreens

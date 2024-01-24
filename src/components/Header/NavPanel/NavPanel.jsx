import React from 'react'
import styles from './NavPanel.module.scss'
import { useTranslation } from 'react-i18next'

const NavPanel = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <a
          href={'#'}
          className={`${styles.nav__link} ${styles.nav__linkActive}`}
        >
          {t('header.navPanel.home')}
        </a>
        <a href={'#'} className={styles.nav__link}>
          {t('header.navPanel.services')}
        </a>
        <a href={'#'} className={styles.nav__link}>
          {t('header.navPanel.features')}
        </a>
        <a href={'#'} className={styles.nav__link}>
          {t('header.navPanel.pricing')}
        </a>
        <a href={'#'} className={styles.nav__link}>
          {t('header.navPanel.team')}
        </a>
        <a href={'#'} className={styles.nav__link}>
          {t('header.navPanel.testimoials')}
        </a>
        <a href={'#'} className={styles.nav__link}>
          {t('header.navPanel.blog')}
        </a>
        <a href={'#'} className={styles.nav__link}>
          {t('header.navPanel.pages')}
        </a>
      </nav>
    </div>
  )
}

export default NavPanel

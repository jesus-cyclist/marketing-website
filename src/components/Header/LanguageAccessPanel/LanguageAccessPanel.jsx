import eng from '@assets/image/eng.png'
import rus from '@assets/image/rus.png'
import { ReactComponent as More } from '@assets/svg/more.svg'
import React, { useState } from 'react'
import Button from '../../UI/Button/Button'
import styles from './LanguageAccessPanel.module.scss'
import { useTranslation } from 'react-i18next'

const LanguageAccessPanel = () => {
  const [language, setLanguage] = useState(eng)

  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    if (language === eng) {
      setLanguage(rus)
      i18n.changeLanguage('rus')
    } else {
      setLanguage(eng)
      i18n.changeLanguage('eng')
    }
  }

  const changeLanguageTranscr = () => (language === eng ? 'ENG' : 'RUS')

  return (
    <div className={styles.container}>
      <div className={styles.controlPanel}>
        <div className={styles.country}>
          <div className={styles.country__logo} onClick={changeLanguage}>
            <img src={language} alt={'coutry logo'} />
          </div>
          <span className={styles.country__text}>
            {changeLanguageTranscr()}
          </span>
        </div>
        <span className={styles.entrance}>
          {t('header.languageAccessPanel.sign')}
        </span>
        <Button>{t('header.languageAccessPanel.button')}</Button>
      </div>
      <div className={styles.more}>
        <More />
      </div>
    </div>
  )
}

export default LanguageAccessPanel

import React from 'react'
import styles from './MarketingIntroSection.module.scss'
import Button from '../../UI/Button/Button'
import { ReactComponent as AppleLogo } from '@assets/svg/apple.svg'
import { ReactComponent as GoogleLogo } from '@assets/svg/google.svg'
import { ReactComponent as Arc } from '@assets/svg/arc.svg'
import Marketing from '@assets/image/media-social-marketing.png'
import { useTranslation } from 'react-i18next'

const MarketingIntroSection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <h2 className={styles.description__tittle}>{t('marketing.title')}</h2>
        <span className={styles.description__text}>{t('marketing.info')}</span>
        <div className={styles.description__control}>
          <Button>
            <div className={styles.button}>
              <div className={styles.button__logo}>
                <GoogleLogo />
              </div>
              <div className={styles.button__text}>
                <span className={styles.button__download}>
                  {t('marketing.googleButton')}
                </span>
                <span>Google Play</span>
              </div>
            </div>
          </Button>

          <Button>
            <div className={styles.button}>
              <div className={styles.button__logo}>
                <AppleLogo />
              </div>
              <div className={styles.button__text}>
                <span className={styles.button__download}>
                  {t('marketing.iosButton')}
                </span>
                <span>App Store</span>
              </div>
            </div>
          </Button>
        </div>
        <div className={styles.background}>
          <div className={styles.background__arc}>
            <Arc />
          </div>

          <div className={styles.background_img}>
            <img src={Marketing} alt='marketing' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketingIntroSection

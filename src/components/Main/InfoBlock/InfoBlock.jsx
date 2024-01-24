import React from 'react'
import styles from './InfoBlock.module.scss'
import Button from '../../UI/Button/Button'
import { ReactComponent as AppleLogo } from '@assets/svg/apple.svg'
import { ReactComponent as GoogleLogo } from '@assets/svg/google.svg'
import Iphone_v1 from '@assets/image/iphone_1.png'
import Iphone_v2 from '@assets/image/iphone_2.png'
import { useTranslation } from 'react-i18next'

const InfoBlock = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.header__intro}>{t('infoBlock.intro')}</span>
          <span className={styles.header__title}>{t('infoBlock.title')}</span>
          <span className={styles.header__subTitle}>
            {t('infoBlock.subtitle')}
          </span>
        </div>
        <div className={styles.controlPanel}>
          <Button>
            <div className={styles.button}>
              <div className={styles.button__logo}>
                <GoogleLogo />
              </div>
              <div className={styles.button__text}>
                <span className={styles.button__download}>
                  {t('infoBlock.googleButton')}
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
                  {t('infoBlock.iosButton')}
                </span>
                <span>App Store</span>
              </div>
            </div>
          </Button>
        </div>

        <div className={styles.background}>
          <div className={styles.background__image}>
            <img src={Iphone_v2} alt='Iphone_v1' />
          </div>
          <div className={styles.background__image}>
            <img src={Iphone_v1} alt='Iphone_v1' />
          </div>
          <div className={styles.background__image}>
            <img src={Iphone_v2} alt='Iphone_v2' />
          </div>
          <div className={styles.background__image}>
            <img src={Iphone_v1} alt='Iphone_v2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBlock

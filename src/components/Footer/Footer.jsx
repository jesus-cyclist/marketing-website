import React from 'react'
import styles from './Footer.module.scss'
import Logo from '@assets/image/Screenshot_2022-09-06_180315-removebg-preview (1) 1.png'
import Inst from '@assets/image/inst.png'
import Face from '@assets/image/face.png'
import Twitter from '@assets/image/twitter.png'
import Youtube from '@assets/image/youtube.png'
import Phone from '@assets/image/phone.png'
import Email from '@assets/image/email.png'
import Location from '@assets/image/location.png'
import Button from '../UI/Button/Button'
import { ReactComponent as AppleLogo } from '@assets/svg/apple.svg'
import { ReactComponent as GoogleLogo } from '@assets/svg/google.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <footer className={styles.footer}>
          <div className={styles.social}>
            <div className={styles.social__header}>
              <div className={styles.social__logo}>
                <img src={Logo} alt='Logo' />
              </div>
              <div className={styles.social__title}>UnikBrushes</div>
            </div>
            <div className={styles.social__iconBlock}>
              <div className={styles.icon}>
                <img src={Inst} alt='Inst' />
              </div>
              <div className={styles.icon}>
                <img src={Face} alt='Face' />
              </div>
              <div className={styles.icon}>
                <img src={Twitter} alt='Twitter' />
              </div>
              <div className={styles.icon}>
                <img src={Youtube} alt='Youtube' />
              </div>
            </div>
          </div>

          <div className={styles.contacts}>
            <span className={styles.contact__title}>
              {t('footer.contactInfo.title')}
            </span>

            <ul className={styles.contacts_list}>
              <li className={styles.contacts__item}>
                <img src={Phone} alt='Phone' />
                <span>+91-299238719900</span>
              </li>
              <li className={styles.contacts__item}>
                <img src={Email} alt='Email' />
                <span>unikbrushes@gmail.com</span>
              </li>
              <li className={styles.contacts__item}>
                <img src={Location} alt='Location' />

                <span>{t('footer.contactInfo.street')}</span>
              </li>
            </ul>
          </div>

          <div className={styles.support}>
            <h4 className={styles.support__title}>
              {t('footer.support.title')}
            </h4>
            <span className={styles.support__text}>
              {t('footer.support.info')}
            </span>
            <div className={styles.support__controlPanel}>
              <Button>
                <div className={styles.button}>
                  <div className={styles.button__logo}>
                    <GoogleLogo />
                  </div>
                  <div className={styles.button__text}>
                    <span className={styles.button__download}>
                      {t('footer.support.googleButton')}
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
                      {t('footer.support.iosButton')}
                    </span>
                    <span>App Store</span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </footer>
      </div>

      <div className={styles.background}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer

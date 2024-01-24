import React from 'react'
import styles from './Pricing.module.scss'
import Button from '../../UI/Button/Button'
import Vector_8 from '@assets/image/Vector 8.png'
import Vector_9 from '@assets/image/Vector 9.png'
import Vector_10 from '@assets/image/Vector 10.png'
import Vector_11 from '@assets/image/Vector 11.png'
import Vector_12 from '@assets/image/Vector 12.png'
import Vector_13 from '@assets/image/Vector 13.png'
import Vector_14 from '@assets/image/Vector 14.png'
import Vector_15 from '@assets/image/Vector 15.png'
import { useTranslation } from 'react-i18next'

const Pricing = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.header__intro}>{t('pricing.intro')}</span>
        <span className={styles.header__title}>{t('pricing.title')}</span>
        <span className={styles.header__subTitle}>{t('pricing.subtitle')}</span>
        <span className={styles.header__text}>{t('pricing.info')}</span>
      </div>
      <div className={styles.main}>
        <div className={styles.pricingPlan}>
          <span className={styles.pricingPlan__intro}>{t('pricing.free')}</span>
          <div className={styles.pricingPlan__price}>
            <span className={styles.pricingPlan__currency}>$</span>
            <span className={styles.pricingPlan__cost}>0</span>
            <span className={styles.pricingPlan__month}>/mo</span>
          </div>
          <span className={styles.pricingPlan__text}>{t('pricing.text')}</span>
          <Button>
            <div className={styles.button}>
              <div className={styles.button__text}>
                <span>{t('pricing.button')}</span>
              </div>
            </div>
          </Button>
        </div>

        <div className={styles.pricingPlan}>
          <span className={styles.pricingPlan__intro}>
            {t('pricing.standard')}
          </span>
          <div className={styles.pricingPlan__price}>
            <span className={styles.pricingPlan__currency}>$</span>
            <span className={styles.pricingPlan__cost}>50</span>
            <span className={styles.pricingPlan__month}>/mo</span>
          </div>
          <span className={styles.pricingPlan__text}>{t('pricing.text')}</span>
          <Button>
            <div className={styles.button}>
              <div className={styles.button__text}>
                <span>{t('pricing.button')}</span>
              </div>
            </div>
          </Button>
        </div>

        <div className={styles.pricingPlan}>
          <span className={styles.pricingPlan__intro}>
            {t('pricing.premium')}
          </span>
          <div className={styles.pricingPlan__price}>
            <span className={styles.pricingPlan__currency}>$</span>
            <span className={styles.pricingPlan__cost}>199</span>
            <span className={styles.pricingPlan__month}>/mo</span>
          </div>
          <span className={styles.pricingPlan__text}>{t('pricing.text')}</span>
          <Button>
            <div className={styles.button}>
              <div className={styles.button__text}>
                <span>{t('pricing.button')}</span>
              </div>
            </div>
          </Button>
        </div>
        <div className={styles.background}>
          <div className={styles.background__row}>
            <img src={Vector_10} alt='Vector_1' />
            <img src={Vector_11} alt='Vector_2' />
          </div>
          <div className={styles.background__row}>
            <img src={Vector_12} alt='Vector_12' />
            <img src={Vector_13} alt='Vector_13' />
          </div>
          <div className={styles.background__row}>
            <img src={Vector_15} alt='Vector_15' />
            <img src={Vector_14} alt='Vector_14' />
          </div>
          <div className={styles.background__row}>
            <img src={Vector_10} alt='Vector_10' />
          </div>
          <div className={styles.background__wide}>
            <img src={Vector_8} alt='Vector_8' />
            <img src={Vector_9} alt='Vector_9' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

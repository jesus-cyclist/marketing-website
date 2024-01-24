import React from 'react'
import styles from './Services.module.scss'
import { ReactComponent as Computer } from '@assets/svg/computer-outline.svg'
import Quality from '@assets/image/quality-label.png'
import OurService from '@assets/image/Image_pge4.png'
import Maket from '@assets/image/carbon_presentation-file.png'
import Desktop from '@assets/image/Vector.png'
import Stats from '@assets/image/Group 9.png'
import Planner from '@assets/image/eos-icons_modified-date-outlined.png'
import Light from '@assets/image/academicons_ideas-repec.png'
import Market from '@assets/image/icon-park-outline_market-analysis.png'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.services}>
      <div className={styles.services__title}>
        <span>{t('services.intro')}</span>
        <h2>{t('services.title')}</h2>
      </div>

      <div className={styles.services__infBlock}>
        <div className={styles.block__plan}>
          <div className={styles.block__logo}>
            <div className={styles.block__icon}>
              <Computer />
            </div>
          </div>
          <div className={styles.block__text}>
            <h3 className={styles.title}>{t('services.features.planInfo')}</h3>
            <span className={styles.text}>
              {t('services.features.planText')}
            </span>
          </div>
        </div>
        <div className={styles.block__quality}>
          <div className={styles.block__logo}>
            <div className={styles.block__icon}>
              <img src={Quality} alt='quality label' />
            </div>
          </div>
          <div className={styles.block__text}>
            <h3 className={styles.title}>
              {t('services.features.qualityTitle')}
            </h3>
            <span className={styles.text}>
              {t('services.features.qualityText')}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.services__presentation}>
        <div className={styles.presentation__advantages}>
          <div className={styles.advantage}>
            <h4 className={styles.advantage__title}>
              {t('services.features.marketTitle')}
            </h4>
            <span className={styles.advantage__text}>
              {t('services.features.text')}
            </span>
            <div className={styles.advantage__logo}>
              <img src={Market} alt={'Client Market'} />
            </div>
          </div>
          <div className={styles.advantage}>
            <h4 className={styles.advantage__title}>
              {t('services.features.ideasTitle')}
            </h4>
            <span className={styles.advantage__text}>
              {t('services.features.text')}
            </span>
            <div className={styles.advantage__logo}>
              <img src={Light} alt={'Awesome Ideas'} />
            </div>
          </div>
          <div className={styles.advantage}>
            <h4 className={styles.advantage__title}>
              {t('services.features.planTitle')}
            </h4>
            <span className={styles.advantage__text}>
              {t('services.features.text')}
            </span>
            <div className={styles.advantage__logo}>
              <img src={Planner} alt={'Planning Settings'} />
            </div>
          </div>
        </div>
        <div className={styles.presentation__logo}>
          <img src={OurService} alt={'out service'} />
        </div>
        <div className={styles.presentation__advantages}>
          <div className={styles.advantage}>
            <h4 className={styles.advantage__title}>
              {t('services.features.marketTitle')}
            </h4>
            <span className={styles.advantage__text}>
              {t('services.features.text')}
            </span>
            <div className={styles.advantage__logo}>
              <img src={Stats} alt={'Financial Advice'} />
            </div>
          </div>
          <div className={styles.advantage}>
            <h4 className={styles.advantage__title}>
              {t('services.features.ideasTitle')}
            </h4>
            <span className={styles.advantage__text}>
              {t('services.features.text')}
            </span>
            <div className={styles.advantage__logo}>
              <img src={Desktop} alt={'Web Solution'} />
            </div>
          </div>
          <div className={styles.advantage}>
            <h4 className={styles.advantage__title}>
              {t('services.features.planTitle')}
            </h4>
            <span className={styles.advantage__text}>
              {t('services.features.text')}
            </span>
            <div className={styles.advantage__logo}>
              <img src={Maket} alt={'Market Analysis'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

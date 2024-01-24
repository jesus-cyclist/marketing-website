import React from 'react'
import styles from './News.module.scss'
import GoodTeam from '@assets/image/Good team-bro.png'
import RemoteTeam from '@assets/image/Remote team-pana.png'
import Team from '@assets/image/image.png'
import { useTranslation } from 'react-i18next'

const News = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.header__intro}>{t('news.intro')}</span>
        <span className={styles.header__title}>UnikBrushes</span>
        <span className={styles.header__subTitle}>{t('news.subtitle')}</span>
        <span className={styles.header__text}>{t('news.info')}</span>
      </div>
      <div className={styles.newsBlock}>
        <div className={styles.news}>
          <div className={styles.news__date}>
            <span className={styles.news__number}>16</span>
            <span className={styles.news__month}>sep</span>
          </div>
          <div className={styles.news__image}>
            <img src={Team} alt='Team' />
          </div>
          <div className={styles.news__info}>
            <span className={styles.news__intro}>{t('news.postIntro')}</span>
            <span className={styles.news__title}>{t('news.postTitle')}</span>
            <span className={styles.news__text}>{t('news.postText')}</span>
            <a href='#' className={styles.news__link}>
              {t('news.button')}
            </a>
          </div>
        </div>
        <div className={styles.news}>
          <div className={styles.news__date}>
            <span className={styles.news__number}>22</span>
            <span className={styles.news__month}>oct</span>
          </div>
          <div className={styles.news__image}>
            <img src={RemoteTeam} alt='RemoteTeam' />
          </div>
          <div className={styles.news__info}>
            <span className={styles.news__intro}>{t('news.postIntro')}</span>
            <span className={styles.news__title}>{t('news.postTitle')}</span>
            <span className={styles.news__text}>{t('news.postText')}</span>
            <a href='#' className={styles.news__link}>
              {t('news.button')}
            </a>
          </div>
        </div>
        <div className={styles.news}>
          <div className={styles.news__date}>
            <span className={styles.news__number}>31</span>
            <span className={styles.news__month}>dec</span>
          </div>
          <div className={styles.news__image}>
            <img src={GoodTeam} alt='Team' />
          </div>
          <div className={styles.news__info}>
            <span className={styles.news__intro}>{t('news.postIntro')}</span>
            <span className={styles.news__title}>{t('news.postTitle')}</span>
            <span className={styles.news__text}>{t('news.postText')}</span>
            <a href='#' className={styles.news__link}>
              {t('news.button')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News

import React from 'react'
import MarketingIntroSection from './MarketingIntroSection/MarketingIntroSection'
import AboutUs from './AboutUs/AboutUs'
import styles from './Main.module.scss'
import Services from './Services/Services'
import AppFeatures from './AppFeatures/AppFeatures'
import AppScreens from './AppScreens/AppScreens'
import InfoBlock from './InfoBlock/InfoBlock'
import Pricing from './Pricing/Pricing'
import News from './News/News'
import Subscribe from './Subscribe/Subscribe'

const Main = () => {
  return (
    <div className={styles.main}>
      <MarketingIntroSection />
      <AboutUs />
      <Services />
      <AppFeatures />
      <AppScreens />
      <InfoBlock />
      <Pricing />
      <News />
      <Subscribe />
    </div>
  )
}

export default Main

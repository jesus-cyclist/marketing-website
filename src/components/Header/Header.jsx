import React from 'react'

import styles from './Header.module.scss'
import LanguageAccessPanel from './LanguageAccessPanel/LanguageAccessPanel'
import NavPanel from './NavPanel/NavPanel'
import Logo from './Logo/Logo'

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <NavPanel />
      <LanguageAccessPanel />
    </div>
  )
}

export default Header

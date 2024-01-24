import React from 'react'
import styles from './Logo.module.scss'
import logo from '@assets/image/logo.png'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt={'logo'} />
    </div>
  )
}

export default Logo

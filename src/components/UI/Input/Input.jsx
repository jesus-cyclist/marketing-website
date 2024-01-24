import React from 'react'
import styles from './Input.module.scss'
import Button from '../Button/Button'

const Input = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='text'
        placeholder={'Email adress'}
      />
      <div className={styles.buttonWrapper}>
        <Button>
          <div className={styles.button}>
            <div className={styles.button__text}>
              <span>Get started</span>
            </div>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Input

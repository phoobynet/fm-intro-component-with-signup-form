import styles from './Input.module.scss'
import React, { InputHTMLAttributes } from 'react'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  error?: string
}

export default function Input ({
  error,
  ...theRest
}: Props) {
  return (
    <div>
      <input
        className={styles.input}
        {...theRest}
        data-error={!!error}
      />
      {error && <div className={styles.inputError}>{error}</div>}
    </div>
  )
}

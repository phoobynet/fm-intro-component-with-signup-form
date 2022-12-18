import styles from './Input.module.scss'
import React, { InputHTMLAttributes } from 'react'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>

export default function Input (props: Props) {
  return (
    <input
      className={styles.input}
      {...props}
    />
  )
}

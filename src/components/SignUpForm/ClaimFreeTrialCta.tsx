import styles from './ClaimFreeTrialCta.module.scss'
import { ButtonHTMLAttributes } from 'react'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export default function ClaimFreeTrialCta (props: Props) {
  return (
    <button
      className={styles.claimFreeTrailCta}
      {...props}
    >
      claim your free trial
    </button>
  )
}

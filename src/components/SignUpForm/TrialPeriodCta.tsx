import styles from '@/components/SignUpForm/TrialPeriodCta.module.scss'

export default function TrialPeriodCta () {
  return (
    <div className={styles.trialPeriodCta}>
      <div>
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </div>
    </div>
  )
}

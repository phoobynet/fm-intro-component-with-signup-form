import styles from './SignUpForm.module.scss'
import TrialPeriodCta from '@/components/SignUpForm/TrialPeriodCta'
import Input from '@/components/SignUpForm/Input'
import ClaimFreeTrialCta from '@/components/SignUpForm/ClaimFreeTrialCta'
import TermsAgreement from '@/components/SignUpForm/TermsAgreement'

export default function SignUpForm () {
  return (
    <div
      className={styles.container}
    >
      <div className={styles.signUpForm}>
        <header>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
            understanding how developers think is invaluable. </p>
        </header>
        <main>
          <div>
            <TrialPeriodCta />
          </div>
          <form
            action=""
            className={styles.form}
          >
            <Input
              type="text"
              placeholder="First Name"
              tabIndex={0}
            />

            <Input
              type="text"
              placeholder="Last Name"
            />
            <Input
              type="email"
              placeholder="Email Address"
            />

            <Input
              type="password"
              placeholder="Password"
            />
            <ClaimFreeTrialCta />
            <TermsAgreement />
          </form>
        </main>
      </div>
    </div>
  )
}

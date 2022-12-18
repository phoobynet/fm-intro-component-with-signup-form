import styles from './SignUpForm.module.scss'
import TrialPeriodCta from '@/components/SignUpForm/TrialPeriodCta'
import Input from '@/components/SignUpForm/Input'
import ClaimFreeTrialCta from '@/components/SignUpForm/ClaimFreeTrialCta'
import TermsAgreement from '@/components/SignUpForm/TermsAgreement'
import { Formik, useFormik } from 'formik'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  password: string
}

type ValidationErrors = Partial<Record<keyof FormValues, string>>

const validate = (values: FormValues): ValidationErrors => {
  const errors: ValidationErrors = {}

  if (!values.firstName) {
    errors.firstName = 'First Name cannot be empty'
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name cannot be empty'
  }

  if (!values.email) {
    errors.email = 'Email cannot be empty'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Looks like this is not an email'
  }

  if (!values.password) {
    errors.password = 'Password cannot be empty'
  }

  return errors
}

export default function SignUpForm () {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

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
            onSubmit={formik.handleSubmit}
            className={styles.form}
          >
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.errors.firstName}
            />

            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.errors.lastName}
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
            />

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password}
            />
            <ClaimFreeTrialCta type="submit" />
            <TermsAgreement />
          </form>
        </main>
      </div>
    </div>
  )
}

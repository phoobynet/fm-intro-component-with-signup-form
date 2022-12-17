import styles from './SignUpForm.module.scss'

export default function SignUpForm () {
  return (
    <div className={styles.signUpForm}>
      <header>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
          understanding how developers think is invaluable. </p>
      </header>
      <main>
        <div className={styles.cta}>
          <div>
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </div>
        </div>
        <form
          action=""
          className={styles.form}
        >
          <input
            type="text"
            placeholder="First Name"
          />

          <input
            type="text"
            placeholder="Last Name"
          />
          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />
          <button type="submit">
            claim your free trial
          </button>
          <p>By clicking the button, you are agreeing to our Terms and Services</p>
        </form>
      </main>
    </div>
  )
}

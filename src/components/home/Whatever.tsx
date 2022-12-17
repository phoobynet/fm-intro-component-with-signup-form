import styles from './Whatever.module.scss'

export default function Whatever() {
  return (
    <div>
      <header>
        <ul className={styles.whateverFeatureList}>
          <li>Vite</li>
          <li>React</li>
          <li>React Router DOM</li>
          <li>TypeScript</li>
          <li>SASS</li>
          <li>ESLint</li>
          <li>Prettier - import order and Tailwind class ordering</li>
          <li>JS Standard-ish (you don&apos;t need semicolons sheeple!)</li>
          <li>
            <code>src</code> path is aliased as <code>@</code>
          </li>
          <li>Husky and lint-staged</li>
        </ul>
      </header>

      <main className={styles.whateverMainContent}>
        <div
          role="heading"
          aria-level={1}
          className={styles.whateverRudeMessage}
        >
          Get to work!
        </div>
      </main>
    </div>
  )
}

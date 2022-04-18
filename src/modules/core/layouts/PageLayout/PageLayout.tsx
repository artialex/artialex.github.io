import Link from 'next/link'
import { FC } from 'react'
import css from './PageLayout.module.scss'

interface PageLayoutProps {}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <div className={css.root}>
    {/*
    <header className={css.header}>
      <ul>
        <li>
          <Link href="/Hi">
            <a className="internal">🏠</a>
          </Link>
        </li>
        <li>
          <Link href="/map">
            <a className="internal">📃</a>
          </Link>
        </li>
      </ul>
    </header>
    */}

    {children}
    <footer className={css.footer}>
      <hr />
      <div>
        <Link href="/?id=Hi">
          <a className="internal">Homepage</a>
        </Link>
        <Link href="/map">
          <a className="internal">All notes</a>
        </Link>
      </div>
    </footer>
  </div>
)

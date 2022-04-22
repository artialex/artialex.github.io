import Link from 'next/link'
import { FC } from 'react'
import css from './PageLayout.module.scss'
import { ThemeSwitcher } from '@/ui.theme'
import { Archive, Home } from 'react-feather'

interface PageLayoutProps {}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <div className={css.root}>
    <header className={css.header}>
      <ul>
        <li>
          <Link href="/?id=Hi">
            <span style={{ cursor: 'pointer' }}>
              <Home />
            </span>
          </Link>
        </li>
        <li>
          <Link href="/map">
            <span style={{ cursor: 'pointer' }}>
              <Archive />
            </span>
          </Link>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>

    {children}

    {/*
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
*/}
  </div>
)

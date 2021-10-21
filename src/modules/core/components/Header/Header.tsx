import css from './Header.module.scss'
import { FC, MouseEventHandler } from 'react'

interface HeaderProps {
  links: Array<string>
  onLinkClick: (id: string) => void
  onThemeClick: MouseEventHandler<HTMLAnchorElement> // fixme?
}

export const Header: FC<HeaderProps> = (props) => (
  <nav className={css.root}>
    <ul>
      <li>
        <a
          onClick={(event) => {
            event.preventDefault()
            props.onLinkClick('Hi')
          }}
          href=""
        >
          🏠
        </a>
      </li>
      <li>
        <a
          href=""
          onClick={(event) => {
            event.preventDefault()

            props.onThemeClick(event)
          }}
        >
          Theme
        </a>
      </li>
    </ul>
  </nav>
)

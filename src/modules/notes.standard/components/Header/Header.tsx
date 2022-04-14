import css from './Header.module.scss'
import { FC, MouseEventHandler, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useGetNoteIdsQuery } from '@/notes/notes.api'
import { open } from '../../notes.slice'

interface HeaderProps {
  links: Array<string>
  onThemeClick: MouseEventHandler<HTMLAnchorElement> // fixme?
}

export const Header: FC<HeaderProps> = (props) => {
  let dispatch = useDispatch()

  let { data, error } = useGetNoteIdsQuery()

  if (!data || error) {
    return null
  }

  return (
    <nav className={css.root}>
      <ul>
        <li>
          <a
            onClick={(event) => {
              event.preventDefault()

              dispatch(open('Hi'))
            }}
            href=""
          >
            🏠
          </a>
        </li>
        {/*
        <li>
          <select name="notes" onInput={handleSelect}>
            <option value="" selected></option>
            {data.map((id) => (
              <option value={id} key={id}>
                {id}
              </option>
            ))}
          </select>
        </li>
*/}

        {/*
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
*/}
      </ul>
    </nav>
  )
}

import { FC } from 'react'
import { useRouter } from 'next/router'

import css from './Toolbar.module.scss'

interface ToolbarProps {}

export const Toolbar: FC<ToolbarProps> = (props) => {
  let router = useRouter()

  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button className={css.button} onClick={() => router.push('/horizontal')}>
          Horizontal
        </button>
      </li>
      <li className={css.item}>
        <button className={css.button} onClick={() => router.push('/vertical')}>
          Vertical
        </button>
      </li>

      {/*
        <li className={css.item}>View</li>
        <li className={css.item}>Edit</li>
        <li className={css.item}>Theme</li>
      */}
    </ul>
  )
}

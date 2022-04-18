import Link from 'next/link'
import { FC } from 'react'
import css from './Tag.module.scss'
import { getPrettyTagName } from '../../tags.service'

export const Tag: FC<{ children: string }> = ({ children }) => (
  <Link href={`/map?tag=${children}`}>
    <a className={css.root}>#{getPrettyTagName(children)}</a>
  </Link>
)

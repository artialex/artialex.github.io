import cn from 'clsx'
import { AnchorHTMLAttributes, FC, MouseEvent } from 'react'
// import { notes } from '../../init'
import css from './NoteLink.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux'
import { open, selectOpened } from '@/notes/contexts/notes'

interface NoteLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: string
}

export const NoteLink: FC<NoteLinkProps> = (props) => {
  let opened = useAppSelector(selectOpened)
  let dispatch = useAppDispatch()

  if (!props.className?.includes) {
    return (
      <a className={cn(css.root, css.external)} target="_blank" href={props.href}>
        {props.children}
      </a>
    )
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()

    dispatch(open(props.href))
  }

  return (
    <a
      className={cn(css.root, css.internal, {
        [css.opened]: opened.includes(props.children) || opened.includes(props.href),
      })}
      onClick={handleClick}
      href=""
    >
      {props.children}
    </a>
  )
}

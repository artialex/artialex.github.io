import cn from 'clsx'
import { AnchorHTMLAttributes, FC, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import css from './NoteLink.module.scss'
import { selectOpenedNotes, OPEN } from '../../notes.slice'

interface NoteLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: string
}

export const NoteLink: FC<NoteLinkProps> = (props) => {
  let opened = useSelector(selectOpenedNotes)
  let dispatch = useDispatch()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()

    dispatch(OPEN(props.href))
  }

  if (!props.className?.includes) {
    return (
      <a className={cn(css.root, css.external)} target="_blank" href={props.href}>
        {props.children}
      </a>
    )
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

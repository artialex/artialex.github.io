import Image from 'next/image'
import css from './Insertion.module.scss'
import { FC } from 'react'

interface InsertionProps {
  type: string
  children: string
}

export const Insertion: FC<InsertionProps> = (props) => {
  if (!props.children?.[0] || !props.type) {
    return null
  }

  let dir = props.children[0]
  let image = props.type

  return (
    <div className={css.root}>
      <img src={`/images/${dir}/${image}.svg`} />
      {/*<Image src={} width={100} height={100} />*/}
      {/* <p>Insertion of type "{props.children}" not found</p> */}
    </div>
  )
}

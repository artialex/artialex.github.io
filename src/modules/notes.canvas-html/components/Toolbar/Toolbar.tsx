import { FC, MouseEventHandler, useCallback, useState } from 'react'
import css from './Toolbar.module.scss'

interface ToolbarProps {}

export const Toolbar: FC<ToolbarProps> = (props) => {
  return (
    <div className={css.root}>
      <h3>Toolbar</h3>
    </div>
  )
}

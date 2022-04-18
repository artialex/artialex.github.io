import { FC, useEffect } from 'react'
import css from './CanvasPage.module.scss'
import { DynamicCanvasStage } from '../../CanvasStage'
import { configure } from '@/markdown'

export const CanvasPage = () => {
  return <DynamicCanvasStage />
}

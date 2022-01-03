import { FC } from 'react'
import css from './PaperPage.module.scss'

interface PaperPageProps {

}

export const PaperPage: FC<PaperPageProps> = (props) => (
  <div className={css.root}>
    <h3>PaperPage</h3>
  </div>
)

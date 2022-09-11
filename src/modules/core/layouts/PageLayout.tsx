import { FC } from 'react'
import { Toolbar } from '../components/Toolbar'

export const PageLayout: FC = ({ children }) => (
  <div className="mx-16 pb-40">
    <Toolbar />
    {children}
  </div>
)

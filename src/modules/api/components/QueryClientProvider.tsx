import { FC } from 'react'
import { queryClient } from '../services/query.service'
import { QueryClientProvider as Provider } from 'react-query'

export const QueryClientProvider: FC = ({ children }) => {
  return <Provider client={queryClient}>{children}</Provider>
}

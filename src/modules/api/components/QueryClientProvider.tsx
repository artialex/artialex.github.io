import { FC } from 'react'
import { QueryClientProvider as Provider } from 'react-query'
import { queryClient } from '../services/query.service'

export const QueryClientProvider: FC = ({ children }) => {
  return <Provider client={queryClient}>{children}</Provider>
}

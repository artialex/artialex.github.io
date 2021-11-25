import { useEffect } from 'react'
import { useAppSelector } from '@/redux.hooks'
import { themeCurrent } from '../contexts/theme'

export function useTheme() {
  let current = useAppSelector(themeCurrent)

  useEffect(() => {
    document.body.classList.forEach((clаss) => {
      if (clаss.endsWith('theme')) {
        document.body.classList.remove(clаss)
      }
    })

    document.body.classList.add(current)
  }, [current])
}

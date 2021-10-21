import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux'
import { themeCurrent } from '@/ui.theme/contexts/theme'

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

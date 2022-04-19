import Link from 'next/link'
import { Sun, Moon } from 'react-feather'
import { useEffect, useState } from 'react'
import { useTheme } from '@/ui.theme/hooks/useTheme'

export const ThemeSwitcher = () => {
  let [theme, setTheme] = useTheme()

  return (
    <a style={{ cursor: 'pointer' }} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </a>
  )
}

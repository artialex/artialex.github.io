import { useEffect, useState } from 'react'
import localforage from 'localforage'
import hljs from 'highlight.js'

export function useTheme(): [Theme, (theme: Theme) => void] {
  let [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('GARDEN__THEME') as Theme) || 'light'
  })

  useEffect(() => {
    document.body.classList.forEach((cssClass) => {
      if (cssClass.endsWith('theme')) {
        document.body.classList.remove(cssClass)
      }
    })

    localStorage.setItem('GARDEN__THEME', theme)

    document.body.classList.add(`${theme}-theme`)
  }, [theme])

  return [theme, setTheme]
}

type Theme = 'light' | 'dark'

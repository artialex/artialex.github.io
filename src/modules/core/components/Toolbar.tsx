import Link from 'next/link'
import { Tag, Home, Archive } from 'react-feather'

export const Toolbar = () => (
  <header className="fixed left-0 w-16">
    <ul className="mt-8 flex list-none flex-col items-center justify-end gap-4">
      {[
        {
          value: '/?id=Hi',
          label: <Home />,
          title: 'To first note',
        },
        {
          value: '/tags',
          label: <Tag />,
          title: 'All tags',
        },
        {
          value: '/notes',
          label: <Archive />,
        },
      ].map(({ value, label, title }) => (
        <li key={value}>
          <Link href={value}>
            <a title={title} className="cursor-pointer transition hover:opacity-50">
              {label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </header>
)

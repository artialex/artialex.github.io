import { FC } from 'react'
import { useGetGraphQuery } from '../../notes.api'
import { Spinner } from '@/ui'
import { Tag } from '../Tag'
import Link from 'next/link'

interface LinkVaultProps {
  tags: string[]
}

export const LinkVault: FC<LinkVaultProps> = ({ tags }) => {
  const { data, error, isLoading } = useGetGraphQuery()

  if (!data || isLoading) {
    return <Spinner />
  }

  if (!tags || tags.every((tag) => !(tag in data.vault.tags))) {
    return null
  }

  return (
    <div>
      <Link href="/?id=Link Vault">
        <h2>Link Vault</h2>
      </Link>
      <div>
        {tags.map(
          (tag) =>
            tag in data.vault.tags && (
              <div key={tag}>
                <Tag>{tag}</Tag>
                <ul>
                  {data.vault.tags[tag].map((link) => (
                    <li key={link}>
                      <a href={data.vault.links[link].url} target="_blank" className="external">
                        {link}
                      </a>

                      {data.vault.links[link].description && (
                        <span>: {data.vault.links[link].description}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
        )}
      </div>
    </div>
  )
}

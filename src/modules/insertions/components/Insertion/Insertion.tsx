import React, { FC, useMemo, useState } from 'react'
import { BacktrackingSearch } from '../BacktrackingSearch'
import { BezierCurves } from '../BezierCurves'

interface InsertionProps {
  type: string
  children: any
}

const Observable = (props: any) => {
  return <iframe width="100%" frameborder="0" {...props}></iframe>
}

const FilterTable = (props: any) => {
  let [filter, setFilter] = useState('')

  let resources = useMemo(
    () =>
      props.children.props.children[1].props.children.map((_: any) => ({
        name: _.props.children[0].props.children[0].props.children[0],
        href: _.props.children[0].props.children[0].props.href,
        tags: _.props.children[1].props.children[0].split(',').map((_: any) => _.trim()),
        notes: _.props.children[2].props.children?.[0].split(',').map((_: any) => _.trim()) || [],
      })),
    [props.children]
  )

  let filtered = resources.filter(
    (resource: any) =>
      resource.name.toLowerCase().includes(filter.toLowerCase()) ||
      resource.tags.some((tag: any) => tag.toLowerCase().includes(filter.toLowerCase()))
  )

  return (
    <>
      <input
        style={{
          width: '100%',
          border: 'none',
          borderBottom: '1px solid var(--subtle-color)',
          padding: '0.8rem',
        }}
        value={filter}
        type="text"
        placeholder="Filter by name or tag"
        onChange={(event) => setFilter(event.target.value)}
      />
      <div>
        {filtered.map((resource: any) => (
          <h3 key={resource.name} style={{ fontWeight: 'normal' }}>
            <a target="_blank" className="external" href={resource.href}>
              {resource.name}
            </a>{' '}
            <small>{resource.tags.join(' • ')}</small>
            <div>
              <small>{resource.notes.join(', ')}</small>
            </div>
          </h3>
        ))}
      </div>
    </>
  )
}

const insertionMap: Record<any, any> = {
  backtracking: BacktrackingSearch,
  beziercurves: BezierCurves,
  filtertable: FilterTable,
  observable: Observable,
}

export const Insertion: FC<InsertionProps> = ({ children, ...props }) => {
  let isBlockInsertion = typeof children?.[0] === 'object'
  let type = isBlockInsertion
    ? children?.[0].props.children?.[0]
    : (children?.[0] as keyof typeof insertionMap)

  if (!type) {
    return null
  }

  if (type in insertionMap) {
    if (isBlockInsertion) {
      return React.createElement(insertionMap[type], {
        ...props,
        children: children?.[1],
      })
    } else {
      return React.createElement(insertionMap[type], props)
    }
  } else {
    return (
      <div style={{ paddingLeft: '2rem' }}>
        <span style={{ color: 'var(--red-color)' }}>!</span> Insertion of type <code>{type}</code>{' '}
        does not exist
      </div>
    )
  }

  /*
  if (!props.children?.[0] || !props.type) {
    return null
  }

  let dir = props.children[0]
  let image = props.type

  return (
    <div className={css.root}>
      <img src={`/images/${dir}/${image}.svg`} />
      {/!*<Image src={} width={100} height={100} />*!/}
      {/!* <p>Insertion of type "{props.children}" not found</p> *!/}
    </div>
  )
*/
}

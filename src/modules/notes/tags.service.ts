import _ from 'lodash'

export const tagMap: Record<string, string> = {
  cg: 'Computer graphics',
  linal: 'Lineal algebra',
  js: 'JavaScript',
  algo: 'Algorithms',
  ds: 'Data structures',
  db: 'Databases',
  fe: 'Frontend',
  wip: 'WIP',
  os: 'Operating system',
  math: 'Mathematics',
  graph: 'Graphs',
  devops: 'DevOps',
  csharp: 'CSharp',
  guide: 'Guides',
  tree: 'Trees',
  eng: 'English language',
  thought: 'Thoughts',
  scratch: 'Scratches',
}

export const ignoredTags = ['done', 'index', 'map', 'ignore']

export function getPrettyTagName(tag: string) {
  return tagMap[tag] || _.capitalize(tag)
}

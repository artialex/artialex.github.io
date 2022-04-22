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
  cs: 'Computer science',
  ui: 'UI',
  zk: 'Zettelkasten',
  math: 'Mathematics',
  graph: 'Graphs',
  devops: 'DevOps',
  csharp: 'CSharp',
  guide: 'Guides',
  tree: 'Trees',
  eng: 'English language',
  thought: 'Thoughts',
  pbm: 'Package-By-Module',
  'file-structure': 'File structure',
  scratch: 'Scratches',
}

export const ignoredTags = ['done', 'index', 'map', 'ignore', 'wip']

export function getPrettyTagName(tag: string) {
  return tagMap[tag] || _.capitalize(tag)
}

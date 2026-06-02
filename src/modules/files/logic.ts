import type { Editor } from 'tldraw';

export const files: Record<string, string> = {
  _pkm: 'PKM',
  _index: "⭐ ArtiAlex's Pensieve",
  _random: 'Random',
  _management: '🌵 Management',

  _javascript: 'JavaScript',
  _typescript: 'TypeScript',
  _golang: 'Golang',
  '_operating-systems': '🌿 Operating Systems',
  '_algorithms-n-data-structures': 'Algorithms & Data Structures',
  '_computer-hardware-n-architecture': 'Hardware',
  _cg: 'Computer Graphics',
  _web: 'Web Dev',
  _css: 'CSS',
  _ai: 'ML & AI',
  _devops: 'DevOps',
  _cs: 'Computer Science',
  _programming: 'Programming',
  _swe: 'Software Engineering',
  _networking: '🌿 Networking',

  _algebra: '📘 Algebra',
  _trigonometry: 'Trigonometry',

  _chemistry: 'Chemistry',
  _physics: 'Physics',
  _biology: 'Biology',
  _science: 'Science',

  _gamedev: 'Game Development',
  _music: 'Music',
  _design: 'Design',
  _finances: 'Finances',
  _pde: 'PDE',
  _colors: 'Colors',
  _backend: 'Backend',
};

export function getPageId(pathname: string) {
  return pathname === '/' ? '_index' : pathname.replaceAll('/', '_');
}

export function getPagePath(id: string) {
  return id === '_index' ? '/' : id.replace('_', '/');
}

export function removeEmoji(str: string) {
  return str.replace(/\p{Extended_Pictographic}/u, '');
}

export function setTitle(editor: Editor, id: string) {
  const page = editor.getCurrentPage();
  const title = removeEmoji(page?.name);
  const fileTitle = removeEmoji(files[id] ?? files._index);

  document.title = fileTitle + ' • ' + title;
}

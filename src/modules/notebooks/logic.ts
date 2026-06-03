import type { Editor } from 'tldraw';

export const notebooks: Record<string, string> = {
  _index: "⭐ ArtiAlex's Pensieve",

  // Computer Science
  '_algorithms-n-data-structures': '🌱 Algorithms & Data Structures',
  _networking: '🌻 Networking',
  '_operating-systems': '🌻 Operating Systems',
  _programming: '🌷 Programming',
  _javascript: '🪻 JavaScript',
  _typescript: '🪻 TypeScript',
  _golang: '🐹 Golang',
  _python: 'Python',
  '_computer-hardware-n-architecture': 'Hardware',
  _cg: '🫖 Computer Graphics',
  _web: 'Web Dev',
  _css: 'CSS',
  _ai: 'ML & AI',
  _devops: 'DevOps',
  _cs: 'Computer Science',
  _swe: 'Software Engineering',
  _gamedev: 'Game Development',
  _backend: 'Backend',

  _management: 'Management',

  // Mathematics
  _algebra: '📘 Algebra',
  _trigonometry: 'Trigonometry',

  // STEM
  _chemistry: 'Chemistry',
  _physics: 'Physics',
  _biology: 'Biology',
  _science: 'Science',

  // Hobbies
  _music: 'Music',
  _design: 'Design',
  _finances: 'Finances',
  _pde: 'PDE',
  _colors: 'Colors',
  _pkm: 'PKM',

  _random: 'Random',
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
  const fileTitle = removeEmoji(notebooks[id] ?? notebooks._index);

  document.title = fileTitle + ' • ' + title;
}

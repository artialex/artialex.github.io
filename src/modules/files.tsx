import {
  TldrawUiButton,
  TldrawUiButtonLabel,
  TldrawUiDropdownMenuContent,
  TldrawUiDropdownMenuGroup,
  TldrawUiDropdownMenuItem,
  TldrawUiDropdownMenuRoot,
  TldrawUiDropdownMenuTrigger,
} from 'tldraw';

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

const id = location.pathname === '/' ? '_index' : location.pathname.replaceAll('/', '_');

export const CustomMapMenu = () => {
  return (
    <TldrawUiDropdownMenuRoot id="my-dropdown">
      <TldrawUiDropdownMenuTrigger>
        <TldrawUiButton type="normal" style={{ width: 'max-content' }}>
          <TldrawUiButtonLabel>{files[id]}</TldrawUiButtonLabel>
        </TldrawUiButton>
      </TldrawUiDropdownMenuTrigger>
      <TldrawUiDropdownMenuContent>
        <div style={{ columns: 3 }}>
          <TldrawUiDropdownMenuGroup>
            {Object.entries(files).map(([key, value]) => (
              <TldrawUiDropdownMenuItem>
                <TldrawUiButton
                  type="menu"
                  onClick={() => {
                    location.pathname = key === '_index' ? '/' : key.replace('_', '/');
                  }}
                >
                  <TldrawUiButtonLabel>{value}</TldrawUiButtonLabel>
                </TldrawUiButton>
              </TldrawUiDropdownMenuItem>
            ))}
          </TldrawUiDropdownMenuGroup>
        </div>
      </TldrawUiDropdownMenuContent>
    </TldrawUiDropdownMenuRoot>
  );
};

export function setTitle(editor: Editor) {
  const page = editor.getCurrentPage();
  const title = page?.name.replace(/\p{Extended_Pictographic}/u, '');
  document.title = files[id].replace(/\p{Extended_Pictographic}/u, '') + ' • ' + title;
}

import {
  DefaultMainMenu,
  DefaultPageMenu,
  TldrawUiButton,
  TldrawUiButtonLabel,
  TldrawUiDropdownMenuContent,
  TldrawUiDropdownMenuGroup,
  TldrawUiDropdownMenuItem,
  TldrawUiDropdownMenuRoot,
  TldrawUiDropdownMenuTrigger,
} from 'tldraw';
import { files, id } from './logic';
import { containsEmoji } from '../toolbelt/string';

export const CustomMapMenu = () => {
  let entries = Object.entries(files);

  if (import.meta.env.PROD) {
    entries = entries.filter(([, value]) => containsEmoji(value));
  }

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
            {entries.map(([key, value]) => (
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

export const CustomMenuPanel = () => (
  <div className="tlui-menu-zone">
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        pointerEvents: 'all',
      }}
    >
      <DefaultMainMenu />
      <CustomMapMenu />
      <DefaultPageMenu />
    </div>
  </div>
);

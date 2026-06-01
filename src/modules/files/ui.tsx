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
import { useNavigate } from 'react-router-dom';
import { files, getPagePath } from './logic';
import { containsEmoji } from '../toolbelt/string';

export const CustomMapMenu = ({ id }: { id: string }) => {
  const navigate = useNavigate();
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
                    navigate(getPagePath(key));
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

export const CustomMenuPanel = ({ id }: { id: string }) => (
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
      <CustomMapMenu id={id} />
      <DefaultPageMenu />
    </div>
  </div>
);

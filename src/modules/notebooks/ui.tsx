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
import { notebooks, getPagePath } from './logic';
import { containsEmoji } from '../toolbelt/string';
import { partition } from '../toolbelt/array';

export const CustomMapMenu = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  let entries = Object.entries(notebooks);

  if (import.meta.env.PROD) {
    entries = entries.filter(([, value]) => containsEmoji(value));
  }

  const [index, rest1] = partition(entries, ([, name]) => name.includes('⭐'));
  const [cs, rest2] = partition(rest1, ([, name]) =>
    ['🌻', '🌱', '🪻', '🌷', '🫖', '🐹'].some((flower) => name.includes(flower)),
  );
  const [stem, rest] = partition(rest2, ([, name]) => ['📘'].some((flower) => name.includes(flower)));

  return (
    <TldrawUiDropdownMenuRoot id="my-dropdown">
      <TldrawUiDropdownMenuTrigger>
        <TldrawUiButton type="normal" style={{ width: 'max-content' }}>
          <TldrawUiButtonLabel>{notebooks[id]}</TldrawUiButtonLabel>
        </TldrawUiButton>
      </TldrawUiDropdownMenuTrigger>
      <TldrawUiDropdownMenuContent>
        {[index, cs, stem, rest].map((group, index) => (
          <TldrawUiDropdownMenuGroup key={index}>
            <div style={{ columns: 3 }}>
              {group.map(([key, value]) => (
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
            </div>
          </TldrawUiDropdownMenuGroup>
        ))}
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

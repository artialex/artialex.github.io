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
    ['🌻', '🌱', '🪻', '🌷', '🫖', '🐹', '☕', '🌿', '💅'].some((flower) => name.includes(flower)),
  );
  const [math, rest3] = partition(rest2, ([, name]) => name.includes('📘'));
  const [stem, rest] = partition(rest3, ([, name]) => name.includes('📗'));

  return (
    <TldrawUiDropdownMenuRoot id="my-dropdown">
      <TldrawUiDropdownMenuTrigger>
        <TldrawUiButton type="normal" style={{ width: 'max-content' }}>
          <TldrawUiButtonLabel>{notebooks[id]}</TldrawUiButtonLabel>
        </TldrawUiButton>
      </TldrawUiDropdownMenuTrigger>
      <TldrawUiDropdownMenuContent>
        {[index, cs, math, stem, rest].map((group, index) => (
          <TldrawUiDropdownMenuGroup key={index}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))' }}>
              {group.map(([key, value]) => (
                <div>
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
                </div>
              ))}
            </div>
          </TldrawUiDropdownMenuGroup>
        ))}
      </TldrawUiDropdownMenuContent>
    </TldrawUiDropdownMenuRoot>
  );
};

interface Props {
  id: string;
}

export const CustomMenuPanel = ({ id }: Props) => (
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
      {import.meta.env.DEV && (
        <TldrawUiButton type="normal" style={{ width: 'max-content', pointerEvents: 'none' }}>
          <TldrawUiButtonLabel>
            <span id="shape-count">0 shapes</span>
          </TldrawUiButtonLabel>
        </TldrawUiButton>
      )}
    </div>
  </div>
);

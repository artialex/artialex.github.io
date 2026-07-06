import { HTMLContainer, useEditor, useValue } from 'tldraw';
import type { ComponentBlockShape } from './embeddable';
import { componentRegistry, type ComponentName, type RegistryItem } from './registry';

export function ComponentBlockShapeView({ shape }: { shape: ComponentBlockShape }) {
  const editor = useEditor();

  const isEditing = useValue('is editing component block', () => editor.getEditingShapeId() === shape.id, [
    editor,
    shape.id,
  ]);

  const item = getRegistryItem(shape.props.componentName);
  const Component = item.Component;
  const data = parsePropsJson(shape.props.propsJson);

  return (
    <HTMLContainer
      style={{
        width: shape.props.w,
        height: shape.props.h,
        overflow: 'hidden',
        background: '#fff',
        borderRadius: 8,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.16)',
        pointerEvents: 'all',
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        editor.setEditingShape(shape.id);
      }}
    >
      {isEditing && <ComponentPicker shape={shape} />}

      <div
        style={{
          position: 'absolute',
          inset: isEditing ? '44px 0 0 0' : 0,
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <Component editor={editor} shape={shape} data={data} />
      </div>
    </HTMLContainer>
  );
}
function isComponentName(value: string): value is ComponentName {
  return value in componentRegistry;
}

function getRegistryItem(name: string): RegistryItem {
  if (isComponentName(name)) return componentRegistry[name];
  return componentRegistry.CounterBlock;
}

function ComponentPicker({ shape }: { shape: ComponentBlockShape }) {
  const editor = useEditor();

  const currentName = isComponentName(shape.props.componentName) ? shape.props.componentName : 'CounterBlock';

  return (
    <div
      // onPointerDownCapture={stopEventPropagation}
      // onKeyDownCapture={stopEventPropagation}
      // onWheelCapture={stopEventPropagation}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 44,
        boxSizing: 'border-box',
        padding: 8,
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        background: '#f3f4f6',
        borderBottom: '1px solid rgba(0,0,0,.12)',
        zIndex: 10,
        fontFamily: 'sans-serif',
      }}
    >
      <select
        value={currentName}
        onChange={(event) => {
          const nextName = event.currentTarget.value;

          if (!isComponentName(nextName)) return;

          const nextItem = componentRegistry[nextName];

          editor.updateShape<ComponentBlockShape>({
            id: shape.id,
            type: shape.type,
            props: {
              componentName: nextName,
              propsJson: JSON.stringify(nextItem.defaultProps, null, 2),
            },
          });
        }}
        style={{
          width: '100%',
          height: 28,
        }}
      >
        {Object.entries(componentRegistry).map(([name, item]) => (
          <option key={name} value={name}>
            {item.label}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          editor.setEditingShape(null);
          editor.setCurrentTool('select.idle');
        }}
      >
        Done
      </button>
    </div>
  );
}

function parsePropsJson(json: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(json);

    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>;
    }

    return {};
  } catch {
    return {};
  }
}

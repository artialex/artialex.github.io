import {
  BaseBoxShapeUtil,
  HTMLContainer,
  T,
  type TLResizeInfo,
  resizeBox,
  type RecordProps,
  type TLBaseShape,
} from 'tldraw';

import katex from 'katex';
import 'katex/dist/katex.min.css';

export const MATH_SHAPE_TYPE = 'math' as const;

export type MathShape = TLBaseShape<
  typeof MATH_SHAPE_TYPE,
  {
    w: number;
    h: number;
    latex: string;
  }
>;

export class MathShapeUtil extends BaseBoxShapeUtil<MathShape> {
  static override type = MATH_SHAPE_TYPE;

  static override props: RecordProps<MathShape> = {
    w: T.number,
    h: T.number,
    latex: T.string,
  };

  override canEdit() {
    return true;
  }

  override getDefaultProps(): MathShape['props'] {
    return {
      w: 320,
      h: 120,
      latex: String.raw`E = mc^2`,
    };
  }

  override component(shape: MathShape) {
    const isEditing = this.editor.getEditingShapeId() === shape.id;

    if (isEditing) {
      return (
        <HTMLContainer>
          <textarea
            autoFocus
            value={shape.props.latex}
            onPointerDown={(e) => e.stopPropagation()}
            onPointerMove={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              e.stopPropagation();

              if (e.key === 'Escape') {
                this.editor.setCurrentTool('select.idle');
              }
            }}
            onChange={(e) => {
              this.editor.updateShape<MathShape>({
                id: shape.id,
                type: MATH_SHAPE_TYPE,
                props: {
                  latex: e.currentTarget.value,
                },
              });
            }}
            style={{
              width: shape.props.w,
              height: shape.props.h,
              boxSizing: 'border-box',
              // padding: 12,
              border: '1px solid #999',
              borderRadius: 8,
              resize: 'none',
              fontSize: 12,
              fontFamily: 'monospace',
              background: 'white',
              pointerEvents: 'all',
              color: 'black',
            }}
          />
        </HTMLContainer>
      );
    }

    const html = katex.renderToString(shape.props.latex, {
      throwOnError: false,
      displayMode: true,
      macros: {
        '\\a': '{\\color{#D1495B}{a}}',
        '\\b': '{\\color{#2E86AB}{b}}',
        '\\c': '{\\color{#3A7D44}{c}}',
        '\\d': '{\\color{#9C6ADE}{d}}',

        '\\gathered': '\\begin{gathered}',
        '\\egathered': '\\end{gathered}',
      },
    });

    return (
      <HTMLContainer>
        <div
          style={{
            width: shape.props.w,
            height: shape.props.h,
            boxSizing: 'border-box',
            padding: 12,
            border: '1px solid #ddd',
            borderRadius: 8,
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </HTMLContainer>
    );
  }

  override indicator(shape: MathShape) {
    return <rect width={shape.props.w} height={shape.props.h} rx={8} />;
  }

  override onResize(shape: MathShape, info: TLResizeInfo<MathShape>) {
    return resizeBox(shape, info);
  }
}

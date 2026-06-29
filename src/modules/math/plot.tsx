import {
  BaseBoxShapeUtil,
  HTMLContainer,
  T,
  resizeBox,
  type RecordProps,
  type TLBaseShape,
  type TLResizeInfo,
} from 'tldraw';

import { useEffect, useRef } from 'react';

export const GRAPH_SHAPE_TYPE = 'graph' as const;

export type GraphShape = TLBaseShape<
  typeof GRAPH_SHAPE_TYPE,
  {
    w: number;
    h: number;
    expr: string;
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
  }
>;

export class GraphShapeUtil extends BaseBoxShapeUtil<GraphShape> {
  static override type = GRAPH_SHAPE_TYPE;

  static override props: RecordProps<GraphShape> = {
    w: T.number,
    h: T.number,
    expr: T.string,
    xmin: T.number,
    xmax: T.number,
    ymin: T.number,
    ymax: T.number,
  };

  override canEdit() {
    return true;
  }

  override getDefaultProps(): GraphShape['props'] {
    return {
      w: 420,
      h: 300,
      expr: 'y = sin(x)',
      xmin: -10,
      xmax: 10,
      ymin: -5,
      ymax: 5,
    };
  }

  override component(shape: GraphShape) {
    const isEditing = this.editor.getEditingShapeId() === shape.id;

    if (isEditing) {
      return (
        <HTMLContainer>
          <textarea
            autoFocus
            value={shape.props.expr}
            onPointerDown={(e) => e.stopPropagation()}
            onPointerMove={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              e.stopPropagation();

              if (e.key === 'Escape') {
                this.editor.setEditingShape(null);
              }
            }}
            onChange={(e) => {
              this.editor.updateShape<GraphShape>({
                id: shape.id,
                type: GRAPH_SHAPE_TYPE,
                props: {
                  expr: e.currentTarget.value,
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
              fontSize: 16,
              fontFamily: 'monospace',
              background: 'white',
              pointerEvents: 'all',
              color: 'black',
            }}
          />
        </HTMLContainer>
      );
    }

    return <GraphComponent shape={shape} />;
  }

  override indicator(shape: GraphShape) {
    return <rect width={shape.props.w} height={shape.props.h} rx={8} />;
  }

  override onResize(shape: GraphShape, info: TLResizeInfo<GraphShape>) {
    return resizeBox(shape, info);
  }
}

function GraphComponent({ shape }: { shape: GraphShape }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.innerHTML = '';

    const expr = normalizeExpression(shape.props.expr);
    const data = expr
      .split(';')
      .filter(Boolean)
      .map((_) => ({
        fn: _.trim(),
        sampler: 'builtIn',
        graphType: 'polyline',
      }));

    console.log(data);

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      functionPlot({
        target: el,
        width: Math.max(100, shape.props.w),
        height: Math.max(100, shape.props.h),
        grid: false,
        disableZoom: true,
        xAxis: {
          domain: [-10, 10],
        },
        yAxis: {
          domain: [-10, 10],
        },
        data,
      });
    } catch (err) {
      console.error('function-plot error:', err);

      el.innerHTML = `
				<div style="
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: monospace;
					color: #b00020;
				">
					Invalid function: ${escapeHtml(expr)}
				</div>
			`;
    }
  }, [
    shape.props.expr,
    shape.props.w,
    shape.props.h,
    shape.props.xmin,
    shape.props.xmax,
    shape.props.ymin,
    shape.props.ymax,
  ]);

  return (
    <HTMLContainer>
      <div className="plot-title">{shape.props.expr.replaceAll(/\s*;\s*/g, ' • ')}</div>
      <div
        ref={ref}
        // onPointerDown={(e) => e.stopPropagation()}
        // onPointerMove={(e) => e.stopPropagation()}
        // onPointerUp={(e) => e.stopPropagation()}
        className="plot"
        style={{ width: shape.props.w, height: shape.props.h }}
      />
    </HTMLContainer>
  );
}

function normalizeExpression(input: string) {
  return input
    .trim()
    .replace(/^y\s*=\s*/, '')
    .replace(/^f\s*\(\s*x\s*\)\s*=\s*/, '')
    .replace(/π/g, 'pi')
    .replace(/−/g, '-');
}

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

import {
  Geometry2d,
  HTMLContainer,
  type RecordProps,
  Rectangle2d,
  ShapeUtil,
  T,
  type TLBaseShape,
  type TLResizeInfo,
  resizeBox,
} from 'tldraw';
import { Processing } from './Processing';

export const PROCESSING_SHAPE_TYPE = 'p5';

export const DEFAULT_PROCESSING_CODE = `
  s.setup = () => s.createCanvas(${420}, ${260})
  s.draw = () => {
    s.background(220)
    s.ellipse(s.mouseX, s.mouseY, 50, 50)
  }
`.trim();

export type PaperShape = TLBaseShape<
  typeof PROCESSING_SHAPE_TYPE,
  {
    w: number;
    h: number;
    code: string;
  }
>;

export class PaperShapeUtil extends ShapeUtil<PaperShape> {
  static override type = PROCESSING_SHAPE_TYPE;

  static override props: RecordProps<PaperShape> = {
    w: T.number,
    h: T.number,
    code: T.string,
  };

  override getDefaultProps(): PaperShape['props'] {
    return {
      w: 420,
      h: 260,
      code: DEFAULT_PROCESSING_CODE,
    };
  }

  override canEdit() {
    return true;
  }

  override canResize() {
    return true;
  }

  override isAspectRatioLocked() {
    return false;
  }

  getGeometry(shape: PaperShape): Geometry2d {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  component(shape: PaperShape) {
    const isEditing = this.editor.getEditingShapeId() === shape.id;

    if (isEditing) {
      return (
        <HTMLContainer>
          <textarea
            autoFocus
            value={shape.props.code}
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
              this.editor.updateShape<PaperShape>({
                id: shape.id,
                type: PROCESSING_SHAPE_TYPE,
                props: {
                  code: e.currentTarget.value,
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

    return <Processing code={shape.props.code} width={shape.props.w} height={shape.props.h} />;
  }

  override indicator(shape: PaperShape) {
    return <rect width={shape.props.w} height={shape.props.h} rx={8} />;
  }

  override onResize(shape: PaperShape, info: TLResizeInfo<PaperShape>) {
    return resizeBox(shape, info);
  }
}

/*

let offset = 0
const lgray = new paper.Color('lightgray')
const white = new paper.Color('black')

const origin = new paper.Point(0, 0)
const start = createDot([-360, -80], new paper.Color('red'))
const h1 = createDot([-140, 220], new paper.Color('green'))
const h2 = createDot([40, -40], new paper.Color('blue'))
const end = createDot([260, 180], new paper.Color('yellow'))

let start2 = createDot(start.multiply(1.5), new paper.Color('red'), { radius: 2.5 })
let h12 = createDot(h1.multiply(1.5), new paper.Color('green'), { radius: 2.5 })
let h22 = createDot(h2.multiply(1.5), new paper.Color('blue'), { radius: 2.5 })
let end2 = createDot(end.multiply(1.5), new paper.Color('yellow'), { radius: 2.5 })

const helper1 = new paper.Path.Line(origin, start2)
helper1.strokeColor = lgray
helper1.dashArray = [10, 12]
let helper2 = new paper.Path.Line(origin, h12)
helper2.strokeColor = lgray
helper2.dashArray = [10, 12]
let helper3 = new paper.Path.Line(origin, h22)
helper3.strokeColor = lgray
helper3.dashArray = [10, 12]
let helper4 = new paper.Path.Line(origin, end2)
helper4.strokeColor = lgray
helper4.dashArray = [10, 12]


      let path2 = new paper.Path()
      path2.moveTo(start2)
      path2.cubicCurveTo(h12, h22, end2)
      path2.strokeColor = white
      path2.dashArray = [10, 12]

 let dots = [start, h1, h2, end]

      while (dots.length) {
        let newdots = []

        for (let i = 0; i < dots.length - 1; i++) {
          let line = new paper.Path.Line(dots[i], dots[i + 1])
          line.strokeColor = lgray
          line.dashArray = [4, 4]

          newdots.push(
            createDot(line.getPointAt((line.length * offset) / 100), white, {
              radius: dots.length === 2 ? 5 : 2,
            })
          )
        }

        dots = newdots
      }

    let path = new paper.Path()
    path.moveTo(start)
    path.cubicCurveTo(h1, h2, end)
    path.strokeWidth = 2
    path.strokeColor = white


paper.view.matrix = new paper.Matrix(1, 0, 0, -1, paper.view.center.x, paper.view.center.y)
paper.view.onFrame = (event) => {
  offset += (offset + 0.5) % 100
}


function createDot(p, color, options) {
  const point = new paper.Point(p)
  const dot = new paper.Path.Circle(point, options?.radius || 4)
  dot.fillColor = color
  return point
}

function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}

function closest(target, points) {
  let closest = 'start'

  for (let key of Object.keys(points)) {
    if (distance(target, points[key]) < distance(target, points[closest])) {
      closest = key
    }
  }

  return closest
}

*/

import {
  Geometry2d,
  Rectangle2d,
  ShapeUtil,
  T,
  resizeBox,
  type RecordProps,
  type TLBaseShape,
  type TLResizeInfo,
} from 'tldraw';
import { ComponentBlockShapeView } from './ComponentPicker';

export const COMPONENT_BLOCK_SHAPE_TYPE = 'component-block';

export type ComponentBlockShape = TLBaseShape<
  typeof COMPONENT_BLOCK_SHAPE_TYPE,
  {
    w: number;
    h: number;
    componentName: string;
    propsJson: string;
  }
>;

export class ComponentBlockShapeUtil extends ShapeUtil<ComponentBlockShape> {
  static override type = COMPONENT_BLOCK_SHAPE_TYPE;

  static override props: RecordProps<ComponentBlockShape> = {
    w: T.number,
    h: T.number,
    componentName: T.string,
    propsJson: T.string,
  };

  override getDefaultProps(): ComponentBlockShape['props'] {
    return {
      w: 360,
      h: 220,
      componentName: 'CounterBlock',
      propsJson: JSON.stringify({ initial: 0 }, null, 2),
    };
  }

  override canResize() {
    return true;
  }

  override canEdit() {
    return true;
  }

  getGeometry(shape: ComponentBlockShape): Geometry2d {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  component(shape: ComponentBlockShape) {
    return <ComponentBlockShapeView shape={shape} />;
  }

  override indicator(shape: ComponentBlockShape) {
    return <rect width={shape.props.w} height={shape.props.h} rx={8} />;
  }

  override onResize(shape: ComponentBlockShape, info: TLResizeInfo<ComponentBlockShape>) {
    return resizeBox(shape, info);
  }
}

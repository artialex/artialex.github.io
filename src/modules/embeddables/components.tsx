import { CanvasBlock } from './canvas/CanvasBlock';
import { BezierCurves } from './components/BezierCurves';
import { CounterBlock, StatusBlock } from './components/CounterBlock';
import { QuoteBlock } from './components/QuoteBlock';
import type { RuntimeComponentProps } from './registry';

export const CanvasBlockEntry = (props: RuntimeComponentProps) => <CanvasBlock {...props} />;
export const CounterBlockEntry = (props: RuntimeComponentProps) => <CounterBlock {...props} />;
export const BezierCurvesEntry = (_props: RuntimeComponentProps) => <BezierCurves />;
export const QuoteBlockEntry = (props: RuntimeComponentProps) => <QuoteBlock {...props} />;
export const StatusBlockEntry = (props: RuntimeComponentProps) => <StatusBlock {...props} />;


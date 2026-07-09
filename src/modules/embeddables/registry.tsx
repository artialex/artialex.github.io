import type { Editor } from '@tiptap/core';
import type { ComponentBlockShape } from './embeddable';
import {
  BezierCurvesEntry,
  CanvasBlockEntry,
  CounterBlockEntry,
  QuoteBlockEntry,
  StatusBlockEntry,
} from './components';

export type RuntimeComponentProps = {
  editor: Editor;
  shape: ComponentBlockShape;
  data: Record<string, unknown>;
};

export type RegistryItem = {
  label: string;
  Component: React.ComponentType<RuntimeComponentProps>;
  defaultProps: Record<string, unknown>;
};

export const componentRegistry = {
  // BacktrackingSearch: {
  //   label: 'Backtracking Search',
  //   Component: BacktrackingSearch,
  //   defaultProps: { initial: 0 },
  // },
  // Combinatorics: {
  //   label: 'Combinatorics',

  //   Component: Combinatorics,
  //   defaultProps: {
  //     type: 'combinations',
  //     k: 2,
  //     n: 2,
  //   },
  // },
  CanvasBlock: {
    label: 'Canvas',
    Component: CanvasBlockEntry,
    defaultProps: { initial: 0 },
  },
  CounterBlock: {
    label: 'Counter',
    Component: CounterBlockEntry,
    defaultProps: { initial: 0 },
  },
  BezierCurves: {
    label: 'Bezier Curves',
    Component: BezierCurvesEntry,
    defaultProps: {},
  },
  QuoteBlock: {
    label: 'Quote',
    Component: QuoteBlockEntry,
    defaultProps: {
      text: 'A React component rendered inside a tldraw block.',
    },
  },
  StatusBlock: {
    label: 'Status',
    Component: StatusBlockEntry,
    defaultProps: {
      label: 'Status',
      value: 'Draft',
    },
  },
} satisfies Record<string, RegistryItem>;

export type ComponentName = keyof typeof componentRegistry;

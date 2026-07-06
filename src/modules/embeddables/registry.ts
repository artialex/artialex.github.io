import { CounterBlock, QuoteBlock, StatusBlock } from './components/CounterBlock';
import { BezierCurves } from './components/BezierCurves';
// import { BacktrackingSearch } from './components/BacktrackingSearch/BacktrackingSearch';
import type { Editor } from '@tiptap/core';
import type { ComponentBlockShape } from './embeddable';
// import { Combinatorics } from './components/Combinatorics';

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
  CounterBlock: {
    label: 'Counter',
    Component: CounterBlock,
    defaultProps: { initial: 0 },
  },
  BezierCurves: {
    label: 'Bezier Curves',
    Component: BezierCurves,
    defaultProps: {},
  },
  QuoteBlock: {
    label: 'Quote',
    Component: QuoteBlock,
    defaultProps: {
      text: 'A React component rendered inside a tldraw block.',
    },
  },
  StatusBlock: {
    label: 'Status',
    Component: StatusBlock,
    defaultProps: {
      label: 'Status',
      value: 'Draft',
    },
  },
} satisfies Record<string, RegistryItem>;

export type ComponentName = keyof typeof componentRegistry;

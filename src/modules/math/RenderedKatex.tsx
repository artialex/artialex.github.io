import katex from 'katex';
import { HTMLContainer } from 'tldraw';

interface Props {
  width: number;
  height: number;
  latex: string;
}

export const RenderedKatex = ({ width, height, latex }: Props) => {
  const html = katex.renderToString(latex, {
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
          width: width,
          height: height,
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
};

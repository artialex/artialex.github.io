import p5 from 'p5';
import { useLayoutEffect, useRef } from 'react';
import { HTMLContainer } from 'tldraw';

export function Processing({ code, width, height }: { code: string; width: number; height: number }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<p5 | null>(null);

  useLayoutEffect(() => {
    if (!hostRef.current) return;
    const sketchFn = new Function('s', 'p5', code);
    const sketch = (s: p5) => sketchFn(s, p5);
    try {
      p5Ref.current = new p5(sketch, hostRef.current);
    } catch (error) {
      const message = document.createElement('pre');
      message.textContent = error instanceof Error ? `p5 error: ${error.message}` : `p5 error: ${String(error)}`;

      message.style.margin = '0';
      message.style.padding = '12px';
      message.style.color = 'red';
      message.style.fontFamily = 'monospace';
      message.style.fontSize = '13px';
      message.style.whiteSpace = 'pre-wrap';

      hostRef.current.replaceChildren(message);
    }

    return () => {
      p5Ref.current?.remove();
      p5Ref.current?.remove();
      p5Ref.current = null;
    };
  }, [width, height, code]);

  return (
    <HTMLContainer>
      <div
        ref={hostRef}
        data-p5-host
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      />
    </HTMLContainer>
  );
}

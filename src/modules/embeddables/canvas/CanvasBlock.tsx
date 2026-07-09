import { useLayoutEffect, useRef } from 'react';
import type { RuntimeComponentProps } from '../registry';

export const CanvasBlock = (props: RuntimeComponentProps) => {
  // return 'Canvas';
  const ref = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(250, 150);
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }, []);

  return <canvas ref={ref} width={400} height={300}></canvas>;
};

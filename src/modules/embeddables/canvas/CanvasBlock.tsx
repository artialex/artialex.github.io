import { useLayoutEffect, useRef } from 'react';

export const CanvasBlock = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(250, 150);
    ctx.strokeStyle = 'green';
    ctx.stroke();
  }, []);

  return <canvas ref={ref} width={400} height={300}></canvas>;
};

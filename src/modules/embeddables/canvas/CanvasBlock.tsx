import { useEffect, useMemo, useRef } from 'react';
import type { RuntimeComponentProps } from '../registry';

const CELL_SIZE = 24;
const CELL_LIFETIME_MS = 2000;
const COLOR_PALETTE = ['#ffd166', '#80ed99', '#90e0ef', '#a0c4ff', '#cdb4db', '#ffafcc'];

type ActiveCell = {
  color: string;
  expiresAt: number;
};

export const CanvasBlock = ({ shape }: RuntimeComponentProps) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const activeCellsRef = useRef(new Map<string, ActiveCell>());
  const frameRef = useRef<number | null>(null);

  const width = Math.max(1, Math.round(shape.props.w));
  const height = Math.max(1, Math.round(shape.props.h));

  const grid = useMemo(() => {
    return {
      cols: Math.ceil(width / CELL_SIZE),
      rows: Math.ceil(height / CELL_SIZE),
    };
  }, [height, width]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const now = performance.now();

      ctx.clearRect(0, 0, width, height);

      for (const [key, cell] of activeCellsRef.current) {
        if (cell.expiresAt <= now) {
          activeCellsRef.current.delete(key);
          continue;
        }

        const [col, row] = key.split(':').map(Number);
        const progress = (cell.expiresAt - now) / CELL_LIFETIME_MS;
        const alpha = Math.max(0, Math.min(1, progress));

        ctx.fillStyle = `${cell.color}${Math.round(alpha * 255)
          .toString(16)
          .padStart(2, '0')}`;
        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [height, width]);

  const activateCell = (clientX: number, clientY: number) => {
    const canvas = ref.current;
    if (!canvas) return;

    const bounds = canvas.getBoundingClientRect();
    const x = clientX - bounds.left;
    const y = clientY - bounds.top;

    if (x < 0 || y < 0 || x >= bounds.width || y >= bounds.height) return;

    const col = Math.max(0, Math.min(grid.cols - 1, Math.floor((x / bounds.width) * grid.cols)));
    const row = Math.max(0, Math.min(grid.rows - 1, Math.floor((y / bounds.height) * grid.rows)));
    const key = `${col}:${row}`;
    const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];

    activeCellsRef.current.set(key, {
      color,
      expiresAt: performance.now() + CELL_LIFETIME_MS,
    });
  };

  return (
    <canvas
      ref={ref}
      width={width}
      height={height}
      style={{ display: 'block' }}
      onPointerMove={(event) => {
        activateCell(event.clientX, event.clientY);
      }}
    />
  );
};

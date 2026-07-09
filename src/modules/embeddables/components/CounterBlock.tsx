import { useState } from 'react';
import { stopEventPropagation } from 'tldraw';
import type { RuntimeComponentProps } from '../registry';

export function CounterBlock({ data }: RuntimeComponentProps) {
  const initial = typeof data.initial === 'number' ? data.initial : 0;
  const [count, setCount] = useState(initial);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <div>
        <div style={{ fontSize: 48, textAlign: 'center' }}>{count}</div>

        <button
          type="button"
          onPointerDownCapture={stopEventPropagation}
          onClick={(e) => {
            e.stopPropagation();
            setCount((value) => value + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export function StatusBlock({ data }: RuntimeComponentProps) {
  const label = typeof data.label === 'string' ? data.label : 'Status';
  const value = typeof data.value === 'string' ? data.value : 'Unknown';

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        padding: 16,
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ opacity: 0.6, fontSize: 13 }}>{label}</div>
      <div style={{ marginTop: 8, fontSize: 28, fontWeight: 700 }}>{value}</div>
    </div>
  );
}

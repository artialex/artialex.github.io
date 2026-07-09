import type { RuntimeComponentProps } from '../registry';

export function QuoteBlock({ data }: RuntimeComponentProps) {
  const text = typeof data.text === 'string' ? data.text : 'No quote provided';

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        fontSize: 22,
        fontFamily: 'serif',
        lineHeight: 1.35,
      }}
    >
      “{text}”
    </div>
  );
}

import { debounce, getSnapshot, throttle, type TLStore } from 'tldraw';

const DELAY = 2500;

export function saveSnapshot(store: TLStore, id: string, onStart: () => void, onDone: () => void) {
  const initial = throttle(() => {
    onStart();
  }, DELAY);
  const fin = debounce(() => {
    const snapshot = getSnapshot(store);

    fetch(`/api/save?id=${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(snapshot),
    }).then(() => {
      onDone();
    });
  }, DELAY);

  store.listen(
    () => {
      initial();
      fin();
    },
    {
      source: 'user',
      scope: 'document',
    },
  );
}

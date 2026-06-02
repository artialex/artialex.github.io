import { debounce, getSnapshot, type TLStore } from 'tldraw';

export function saveSnapshot(store: TLStore, id: string) {
  store.listen(
    debounce(() => {
      const snapshot = getSnapshot(store);

      fetch(`/api/save?id=${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(snapshot),
      });
    }, 5000),
    {
      source: 'user',
      scope: 'document',
    },
  );
}
